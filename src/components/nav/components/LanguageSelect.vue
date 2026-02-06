<template>
  <div :class="wrapperClass">
    <button
      ref="triggerRef"
      type="button"
      :class="triggerClass"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      @click="toggleMenu"
      @keydown="handleTriggerKeydown"
    >
      <span class="truncate">{{ selectedLabel }}</span>
    </button>
    <svg
      class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-text-muted"
      :class="[
        props.mobile ? 'w-4 h-4' : 'w-3.5 h-3.5',
        isOpen ? 'rotate-180' : 'rotate-0',
      ]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>

    <Teleport to="body">
      <Transition name="lang-fade">
        <button
          v-if="isOpen"
          type="button"
          class="fixed inset-0 z-[1998] bg-transparent"
          aria-label="Close language menu"
          @click="closeMenu"
        />
      </Transition>

      <Transition name="lang-pop">
        <ul
          v-if="isOpen"
          role="listbox"
          :style="menuStyle"
          class="fixed z-[1999] m-0 list-none rounded-xl border border-white/15 bg-[#171923]/95 backdrop-blur-xl shadow-[0_20px_45px_rgba(0,0,0,0.45)] p-1.5"
        >
          <li v-for="item in props.options" :key="item.value">
            <button
              type="button"
              role="option"
              :aria-selected="item.value === props.modelValue"
              @click="selectOption(item.value)"
              :class="optionClass(item.value === props.modelValue)"
            >
              {{ item.label }}
            </button>
          </li>
        </ul>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from "vue";
import type { Locale } from "@/i18n/resources";

type LocaleOption = {
  value: Locale;
  label: string;
};

const props = withDefaults(
  defineProps<{
    modelValue: Locale;
    options: LocaleOption[];
    mobile?: boolean;
  }>(),
  {
    mobile: false,
  },
);

const emit = defineEmits<{
  (e: "update:modelValue", value: Locale): void;
}>();

const triggerRef = ref<HTMLButtonElement | null>(null);
const isOpen = ref(false);
const menuStyle = ref<Record<string, string>>({});

const selectedLabel = computed(
  () =>
    props.options.find((item) => item.value === props.modelValue)?.label ??
    props.options[0]?.label ??
    "",
);

const wrapperClass = computed(() =>
  props.mobile ? "relative w-[86px]" : "relative w-[112px]",
);

const triggerClass = computed(() =>
  [
    "w-full rounded-lg border border-white/20 bg-white/10 text-left text-text font-bold outline-none transition-colors touch-manipulation",
    "hover:border-brand-primary/60 focus:border-brand-primary/60",
    props.mobile ? "h-11 px-3 pr-8 text-sm" : "h-8 px-2 pr-7 text-xs",
  ].join(" "),
);

const updateMenuPosition = () => {
  if (!triggerRef.value) return;
  const rect = triggerRef.value.getBoundingClientRect();
  const menuWidth = Math.max(rect.width, props.mobile ? 104 : 116);
  menuStyle.value = {
    top: `${rect.bottom + 8}px`,
    left: `${Math.max(8, rect.right - menuWidth)}px`,
    width: `${menuWidth}px`,
  };
};

const closeMenu = () => {
  isOpen.value = false;
};

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) updateMenuPosition();
};

const selectOption = (value: Locale) => {
  if (!props.options.some((item) => item.value === value)) return;
  emit("update:modelValue", value);
  closeMenu();
};

const optionClass = (active: boolean) =>
  [
    "w-full h-10 rounded-lg px-3 text-left text-sm transition-colors",
    active
      ? "bg-brand-primary/20 text-brand-primary font-bold"
      : "text-text hover:bg-white/10",
  ].join(" ");

const handleTriggerKeydown = (event: KeyboardEvent) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleMenu();
  }
  if (event.key === "Escape") {
    event.preventDefault();
    closeMenu();
  }
  if (event.key === "ArrowDown" && !isOpen.value) {
    event.preventDefault();
    toggleMenu();
  }
};

watch(isOpen, (open) => {
  if (open) {
    updateMenuPosition();
    window.addEventListener("resize", updateMenuPosition, { passive: true });
    window.addEventListener("scroll", updateMenuPosition, true);
    return;
  }
  window.removeEventListener("resize", updateMenuPosition);
  window.removeEventListener("scroll", updateMenuPosition, true);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateMenuPosition);
  window.removeEventListener("scroll", updateMenuPosition, true);
});
</script>

<style scoped>
.lang-fade-enter-active,
.lang-fade-leave-active {
  transition: opacity 0.18s ease;
}

.lang-fade-enter-from,
.lang-fade-leave-to {
  opacity: 0;
}

.lang-pop-enter-active,
.lang-pop-leave-active {
  transition:
    opacity 0.16s ease,
    transform 0.16s ease;
  transform-origin: top right;
}

.lang-pop-enter-from,
.lang-pop-leave-to {
  opacity: 0;
  transform: translateY(-4px) scale(0.98);
}
</style>
