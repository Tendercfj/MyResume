<template>
  <div
    class="aboutMe w-full bg-surface block"
    :style="{ paddingTop: props.show ? '60px' : '0' }"
  >
    <div class="content w-full py-14 md:py-16 px-[15px] mx-auto text-center">
      <commonTitle :title="title" />
      <ul
        class="max-w-[800px] my-0 mx-auto flex flex-wrap items-center justify-center gap-4"
      >
        <li
          class="w-[45%] sm:w-[30%] md:w-[25%] my-6 md:my-[40px] mx-auto px-2 md:px-[15px] py-0"
          v-for="(item, index) in props.aboutMeList"
          :key="index"
        >
          <div
            class="imgBox h-[88px] w-[88px] md:h-[100px] md:w-[100px] my-0 mx-auto bg-brand-primary rounded-[50%] p-[10px]"
          >
            <img class="block w-full" :src="item.src" alt="关于我" />
          </div>

          <p
            class="m-4 text-[20px] font-bold text-center"
            v-text="item.title"
          ></p>
        </li>
      </ul>
      <div
        class="aboutMeText text-left text-text-subtle leading-[27px] max-w-[1100px] my-0 mx-auto"
      >
        <p v-for="item in props.aboutMeText" :key="item">
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import commonTitle from "../title/commonTitle.vue";
const title = ref("关于我");
type AboutMeItem = {
  src: string;
  title: string;
};

const props = withDefaults(
  defineProps<{
    show?: boolean;
    aboutMeList?: AboutMeItem[];
    aboutMeText?: string[];
  }>(),
  {
    show: false,
    aboutMeList: () => [],
    aboutMeText: () => [],
  },
);
</script>

<style scoped></style>
