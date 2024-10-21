<template>
  <div
    class="aboutMe w-full bg-[#f3f2f3] block"
    :style="{ paddingTop: props.show ? '60px' : '0' }"
  >
    <div class="content w-full py-[90px] px-[15px] mx-auto text-center">
      <h3
        class="text-[36px] leading-[38px] pb-[9px] font-[400] transform uppercase m-0 border-b-[6px] border-b-[#ef7674] border-b-solid inline-block"
      >
        关于我
      </h3>
      <ul class="max-w-[800px] my-0 mx-auto flex items-center justify-around">
        <li
          class="w-[25%] h-[150px] my-[40px] mx-auto px-[15px] py-0"
          v-for="(item, index) in props.aboutMeList"
          :key="index"
        >
          <div
            class="imgBox h-[100px] w-[100px] my-0 mx-auto bg-[#ef7674] rounded-[50%] p-[10px]"
          >
            <img class="block w-full" :src="item.src" alt="关于我" />
          </div>
          <p v-text="item.text"></p>
        </li>
      </ul>
      <div
        class="aboutMeText text-left text-[#897f8a] leading-[27px] max-w-[1100px] my-0 mx-auto"
      >
        <p v-for="(item, index) in props.aboutMeText" :key="index">
          {{ index + 1 }}.{{ item }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  aboutMeList: {
    type: Array,
    default: () => {
      return [];
    },
  },
  aboutMeText: {
    type: Array,
    default: () => {
      return [];
    },
  },
});
</script>

<style scoped></style>
