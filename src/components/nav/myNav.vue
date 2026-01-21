<template>
  <div class="nav flex justify-between items-center" ref="nav">
    <ul
      :style="{
        width: props.Iwidth + '%',
        height: props.Iheight + 'px',
        background: props.Ibackground,
      }"
      :class="{ fixed: show }"
      class="my-0 mx-auto flex items-center justify-between w-full max-w-[1337px] px-4 md:px-[10%] py-0 rounded-b-xl border border-border bg-surface-2 shadow-sm overflow-x-auto whitespace-nowrap no-scrollbar"
    >
      <li
        v-for="(item, index) in props.navList"
        :key="item.id"
        :style="{ fontSize: props.IfontSize + 'px' }"
        @click="handleClick(index, item.id)"
        :class="{ active: index === activeIndex }"
        class="leading-[60px] px-3 md:px-6 py-0 text-text-muted font-bold hover:text-brand-primary hover:cursor-pointer transition-colors duration-300 shrink-0"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

type NavItem = {
  text: string;
  id: string;
};

const props = withDefaults(
  defineProps<{
    navList: NavItem[];
    Iwidth?: string | number;
    Iheight?: number;
    Ibackground?: string;
    IfontSize?: number;
  }>(),
  {
    navList: () => [],
    Iwidth: 50,
    Iheight: 50,
    Ibackground: "#fff",
    IfontSize: 12,
  },
);

const emit = defineEmits<{
  (e: "_click", payload: { index: number; id: string }): void;
  (e: "scroll", value: boolean): void;
}>();
const activeIndex = ref(0);
const show = ref(false);
const nav = ref<HTMLElement | null>(null);

const handleClick = (index: number, id: string) => {
  activeIndex.value = index;
  emit("_click", { index, id });
};

// 监听滚动位置更新导航状态
const handleScroll = () => {
  const top = nav.value?.getBoundingClientRect().top ?? 0;
  show.value = top <= 0;
  emit("scroll", show.value);

  // 更新当前活动的导航项
  updateActiveSection();
};

// 更新当前活动的导航项
const updateActiveSection = () => {
  const sections = document.querySelectorAll<HTMLElement>("section[id]");
  const scrollPosition = window.scrollY;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop - 100 &&
      scrollPosition < sectionTop + sectionHeight - 100
    ) {
      activeIndex.value = index;
    }
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  transform: none;
  z-index: 100;
  box-shadow: 0 8px 24px rgb(15 23 42 / 0.06);
}

.active {
  color: rgb(var(--brand-primary));
}
</style>
