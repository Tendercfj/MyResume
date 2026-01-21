<template>
  <div class="swiper-container relative">
    <div
      class="swiper-wrapper relative top-1/2 left-1/2 transition-all duration-[800] transform -translate-x-1/2 text-white overflow-hidden cursor-pointer"
      :style="{ width: imgWidth + '%', height: imgHeight + 'vh' }"
    >
      <!-- 图片盒子 -->
      <ul class="ul h-full list-none">
        <li
          class="items"
          v-for="(img, index) in props.imgs"
          :key="index"
          :class="index === showIndex ? 'items_active' : 'items'"
        >
          <img :src="img.src" alt="封面轮播图" />
        </li>
      </ul>
    </div>
    <div
      class="swiperText absolute top-[45%] left-0 w-full -translate-y-1/2 m-auto"
    >
      <h2
        class="swiper-text text-white text-3xl sm:text-4xl md:text-5xl text-center px-4"
        ref="swiperName"
      ></h2>
      <p
        class="text-white text-[14px] sm:text-[16px] md:text-[18px] text-center m-2 px-4"
        ref="swiperDescription"
      ></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Typed from "typed.js";
const showIndex = ref(0);
const swiperName = ref<HTMLElement | null>(null);
const swiperDescription = ref<HTMLElement | null>(null);
const next = () => {
  if (showIndex.value === props.imgs.length - 1) {
    showIndex.value = 0;
  } else {
    showIndex.value++;
  }
};
type SwiperImage = {
  src: string;
};

const props = withDefaults(
  defineProps<{
    imgs: SwiperImage[];
    name?: string;
    year?: string;
    imgWidth?: number;
    imgHeight?: number;
    delay?: number;
  }>(),
  {
    name: "",
    year: "",
    imgWidth: 100,
    imgHeight: 100,
    delay: 2000,
  }
);

let timer: number | undefined;
let typedName: any = null;
let typedDescription: any = null;
const delay = () => {
  return props.delay;
};
onMounted(() => {
  timer = window.setInterval(() => {
    next();
  }, delay());
  if (!swiperName.value || !swiperDescription.value) return;
  typedName = new Typed(swiperName.value, {
    strings: [`我叫${props.name}`], //文本
    typeSpeed: 100,
    backSpeed: 100,
    loop: false,
  });
  typedDescription = new Typed(swiperDescription.value, {
    strings: [
      `前端开发工程师一枚,${props.year}年实习经验的前端实习生，乐于尝试新技术，学习能力强。`,
    ], //文本
    typeSpeed: 100,
    backSpeed: 100,
    loop: false,
  });
});
onUnmounted(() => {
  if (timer) window.clearInterval(timer);
  if (typedName) {
    typedName.destroy();
    typedName = null;
  }
  if (typedDescription) {
    typedDescription.destroy();
    typedDescription = null;
  }
});
</script>

<style scoped>
.items {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 2s;
}
.items_active {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: opacity 2s;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

@media screen and (max-width: 768px) {
  .swiper-wrapper {
    height: 65vh !important;
  }
  .swiperText {
    top: 50%;
  }
}
</style>
