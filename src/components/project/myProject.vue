<template>
  <div class="project w-full block">
    <div
      class="content w-full max-w-[1100px] py-14 md:py-16 px-4 sm:px-6 mx-auto text-center"
    >
      <commonTitle :title="title" />
      <div class="mt-8 flex flex-wrap gap-4">
        <article
          v-for="(item, index) in props.project"
          :key="`${item.name}-${index}`"
          class="surface-card overflow-hidden text-left w-full md:basis-[calc(50%-0.5rem)] md:max-w-[calc(50%-0.5rem)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:border-brand-primary/50 group"
        >
          <div class="p-4 sm:p-5">
            <div class="w-full aspect-[16/9] rounded-xl border border-white/10 bg-black/40 overflow-hidden relative">
              <img
                v-if="item.cover"
                :src="item.cover"
                :alt="item.name"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                v-else
                class="w-full h-full grid place-items-center text-text-subtle text-sm"
              >
                项目封面图（待补充）
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <h4 class="mt-4 m-0 text-[18px] sm:text-[19px] font-bold text-white group-hover:text-brand-primary transition-colors">
              {{ item.name }}
            </h4>

            <p class="mt-2 m-0 text-[14px] sm:text-[15px] leading-6 text-text-muted">
              {{ item.summary }}
            </p>

            <div v-if="item.highlights?.length" class="mt-3">
              <p class="m-0 text-sm font-black text-brand-primary uppercase tracking-wider">Highlights</p>
              <ul class="mt-2 list-none p-0 text-[14px] leading-6 text-text-muted">
                <li v-for="(h, hIdx) in item.highlights" :key="hIdx" class="relative pl-4 mb-1">
                  <span class="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_5px_rgba(139,92,246,0.8)]"></span>
                  {{ h }}
                </li>
              </ul>
            </div>

            <div v-if="item.stack?.length" class="mt-4 pt-4 border-t border-white/10">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(t, tIdx) in item.stack"
                  :key="tIdx"
                  class="inline-flex items-center rounded-md border border-brand-primary/30 bg-brand-primary/5 px-2.5 py-1 text-xs font-bold text-brand-primary shadow-[0_0_10px_rgba(139,92,246,0.1)] hover:bg-brand-primary/20 transition-colors"
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
