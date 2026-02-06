<template>
  <div class="experience w-full bg-surface block">
    <div
      class="content w-full max-w-[1100px] pt-14 md:pt-16 px-4 sm:px-6 mx-auto text-center"
    >
      <commonTitle :title="title" />
      <p
        class="max-w-[1100px] my-0 mx-auto text-[16px] leading-[27px] font-[400] text-text-subtle pt-[26px] pb-8"
      >
        {{ props.experienceText }}
      </p>
    </div>
    <div class="w-full max-w-[1100px] mx-auto px-4 sm:px-6 pb-8">
      <article
        v-for="(item, index) in props.experience"
        :key="`${item.company}-${item.beginTime}-${index}`"
        class="surface-card text-left p-4 sm:p-6 mb-4"
      >
        <div class="flex flex-col md:flex-row md:items-start md:gap-6">
          <div class="flex items-center gap-2 md:flex-col md:items-start md:min-w-[160px]">
            <span class="inline-flex px-3 py-1 rounded-full text-white bg-brand-primary text-sm font-semibold">
              {{ item.beginTime }}
            </span>
            <span class="inline-flex px-3 py-1 rounded-full text-white bg-brand-deep text-sm font-semibold">
              {{ item.endTime }}
            </span>
          </div>
          <div class="mt-3 md:mt-0">
            <div class="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
              <h4 class="m-0 text-[18px] sm:text-[19px] font-bold text-text">
                {{ item.company }}
              </h4>
              <p class="m-0 text-[14px] sm:text-[16px] font-medium text-text-muted">
                {{ item.job }}
              </p>
            </div>
            <p class="mt-2 text-[14px] sm:text-[16px] leading-6 text-text-subtle">
              {{ item.reap }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useResumeStore } from "@/store/resumeStore";
import commonTitle from "../title/commonTitle.vue";
const store = useResumeStore();
const title = computed(() => store.uiText.experience.title);
type ExperienceItem = {
  company: string;
  job: string;
  reap: string;
  beginTime: string;
  endTime: string;
};

const props = withDefaults(
  defineProps<{
    experience?: ExperienceItem[];
    experienceText?: string;
  }>(),
  {
    experience: () => [],
    experienceText: "",
  }
);
</script>

<style scoped></style>
