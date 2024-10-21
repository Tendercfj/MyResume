<template>
  <div class="skill w-full bg-white block">
    <div class="content py-[90px] px-[15px] m-x-auto text-center">
      <h3
        class="text-[36px] leading-[38px] pb-[9px] font-[800] transform uppercase m-0 border-b-[6px] border-b-[#ef7674] border-b-solid inline-block"
      >
        技能 - 个人优势
      </h3>
      <p
        class="max-w-[1100px] my-0 mx-auto text-[16px] leading-[27px] font-[400] text-[#897f8a pt-[26px] pb-[45px]]"
      >
        {{ props.skillText }}
      </p>
      <!-- <div
        class="aboutMeText text-left text-[#5b4c5c] leading-[27px] max-w-[1100px] my-4 mx-auto flex flex-col items-start gap-1"
      >
        <p v-for="(item, index) in props.skill" :key="index">
          {{ index + 1 }}.{{ item }}
        </p>
      </div> -->
      <ul class="w-full flex justify-around items-center flex-wrap my-4">
        <li
          class="w-[33%] h-[30px] pb-2 flex-shrink-0 text-[19px] leading-6 text-[#5b4c5c] font-bold"
          v-for="(item, index) in props.skill"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  skill: {
    type: Array,
    default: () => [],
  },
  skillText: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>
