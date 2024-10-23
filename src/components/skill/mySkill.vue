<template>
  <div class="skill w-full bg-white block">
    <div class="content py-[90px] px-[15px] mx-auto text-center">
      <commonTitle :title="title" />
      <p
        class="max-w-[1100px] my-0 mx-auto text-[16px] leading-[27px] font-[400] text-[#897f8a] pt-[26px] pb-[45px]"
      >
        {{ props.skillText }}
      </p>
      <div class="skillItem h-[500px] m-4">
        <skillItem :skillItem="data.skillItem" />
      </div>
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
// import { defineProps } from "vue";
import skillItem from "./skillItem/skillItem.vue";
import commonTitle from "../title/commonTitle.vue";
import data from "../../json/json";
import { ref } from "vue";
const title = ref("技能 - 个人优势");
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
