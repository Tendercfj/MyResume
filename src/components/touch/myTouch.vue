<template>
  <div class="touch w-full bg-surface block">
    <div class="content py-14 md:py-16 px-[15px] mx-auto text-center">
      <commonTitle :title="title" />
      <div
        class="mt-10 w-full max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3"
      >
        <a
          class="surface-card p-4 flex items-center gap-3 hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-colors"
          :href="`mailto:${props.contact.email}`"
        >
          <span class="shrink-0">
            <SvgIcon style="width: 22px; height: 22px" name="mail" />
          </span>
          <div class="text-left min-w-0">
            <p class="m-0 text-sm text-text-muted">{{ store.uiText.touch.email }}</p>
            <p class="m-0 font-semibold text-text truncate">
              {{ props.contact.email }}
            </p>
          </div>
        </a>

        <a
          class="surface-card p-4 flex items-center gap-3 hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-colors"
          :href="`tel:${props.contact.phone}`"
        >
          <span class="shrink-0">
            <SvgIcon style="width: 22px; height: 22px" name="phone" />
          </span>
          <div class="text-left min-w-0">
            <p class="m-0 text-sm text-text-muted">{{ store.uiText.touch.phone }}</p>
            <p class="m-0 font-semibold text-text truncate">
              {{ props.contact.phone }}
            </p>
          </div>
        </a>

        <a
          class="surface-card p-4 flex items-center gap-3 hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-colors"
          :href="props.contact.github"
          target="_blank"
          rel="noreferrer"
        >
          <span class="shrink-0">
            <SvgIcon style="width: 22px; height: 22px" name="git" />
          </span>
          <div class="text-left min-w-0">
            <p class="m-0 text-sm text-text-muted">GitHub</p>
            <p class="m-0 font-semibold text-text truncate">
              {{ props.contact.github }}
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useResumeStore } from "@/store/resumeStore";
import commonTitle from "../title/commonTitle.vue";
import SvgIcon from "../SvgIcon.vue";
const store = useResumeStore();
const title = computed(() => store.uiText.touch.title);
const props = withDefaults(
  defineProps<{
    contact?: {
      email: string;
      phone: string;
      github: string;
    };
  }>(),
  {
    contact: () => ({
      email: "",
      phone: "",
      github: "",
    }),
  }
);
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
