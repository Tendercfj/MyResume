<template>
  <div class="skill w-full bg-white block">
    <div class="content py-14 md:py-16 px-[15px] mx-auto text-center">
      <commonTitle :title="title" />
      <p
        class="max-w-[1100px] my-0 mx-auto text-[16px] leading-[27px] font-[400] text-text-subtle pt-[26px] pb-8"
      >
        {{ props.skillText }}
      </p>
      <div class="skillItem h-auto md:h-[500px] m-2 md:m-4">
        <skillItem :skillItem="data.skillItem" />
      </div>
      <ul class="w-full flex justify-around items-center flex-wrap mt-4">
        <li
          class="w-[50%] sm:w-[33%] h-[30px] pb-2 flex-shrink-0 text-[17px] sm:text-[19px] leading-6 text-text font-bold my-2"
          v-for="(item, index) in props.skill"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import skillItem from "./skillItem/skillItem.vue";
import commonTitle from "../title/commonTitle.vue";
import data from "../../json/json";
import { ref } from "vue";
const title = ref("技能 - 个人优势");
const props = withDefaults(
  defineProps<{
    skill?: string[];
    skillText?: string;
  }>(),
  {
    skill: () => [],
    skillText: "",
  }
);
</script>

<style lang="scss" scoped></style>
