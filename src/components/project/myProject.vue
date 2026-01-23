<template>
  <div class="project w-full bg-surface block">
    <div
      class="content w-full max-w-[1100px] py-14 md:py-16 px-4 sm:px-6 mx-auto text-center"
    >
      <commonTitle :title="title" />
      <div class="mt-8 flex flex-wrap gap-4">
        <article
          v-for="(item, index) in props.project"
          :key="`${item.name}-${index}`"
          class="surface-card overflow-hidden text-left w-full md:basis-[calc(50%-0.5rem)] md:max-w-[calc(50%-0.5rem)]"
        >
          <div class="p-4 sm:p-5">
            <div class="w-full aspect-[16/9] rounded-xl border border-border bg-bg overflow-hidden">
              <img
                v-if="item.cover"
                :src="item.cover"
                :alt="item.name"
                class="w-full h-full object-cover"
              />
              <div
                v-else
                class="w-full h-full grid place-items-center text-text-subtle text-sm"
              >
                项目封面图（待补充）
              </div>
            </div>

            <h4 class="mt-4 m-0 text-[18px] sm:text-[19px] font-bold text-text">
              {{ item.name }}
            </h4>

            <p class="mt-2 m-0 text-[14px] sm:text-[15px] leading-6 text-text-subtle">
              {{ item.summary }}
            </p>

            <div v-if="item.highlights?.length" class="mt-3">
              <p class="m-0 text-sm font-semibold text-text">特色</p>
              <ul class="mt-2 list-disc pl-5 text-[14px] leading-6 text-text-subtle">
                <li v-for="(h, hIdx) in item.highlights" :key="hIdx">
                  {{ h }}
                </li>
              </ul>
            </div>

            <div v-if="item.stack?.length" class="mt-3">
              <p class="m-0 text-sm font-semibold text-text">技术栈</p>
              <div class="mt-2 flex flex-wrap gap-2">
                <span
                  v-for="(t, tIdx) in item.stack"
                  :key="tIdx"
                  class="inline-flex items-center rounded-full border border-brand-primary/15 bg-brand-primary/10 px-2 py-1 text-xs font-medium text-brand-primary"
                >
                  {{ t }}
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import commonTitle from "../title/commonTitle.vue";
const title = ref("项目经历");
type ProjectCard = {
  cover?: string;
  name: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

const props = withDefaults(
  defineProps<{
    project?: ProjectCard[];
  }>(),
  {
    project: () => [],
  }
);
</script>

<style scoped></style>
