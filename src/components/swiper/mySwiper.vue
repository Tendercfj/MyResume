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
        class="swiper-text text-white text-5xl text-center"
        ref="swiperName"
      ></h2>
      <p
        class="text-white text-[18px] text-center m-2"
        ref="swiperDescription"
      ></p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Typed from "typed.js";
const showIndex = ref(0);
const swiperName = ref(null);
const swiperDescription = ref(null);
const next = () => {
  if (showIndex.value === props.imgs.length - 1) {
    showIndex.value = 0;
  } else {
    showIndex.value++;
  }
};
const props = defineProps({
  imgs: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    default: "",
  },
  year: {
    type: String,
    default: "",
  },
  imgWidth: {
    type: Number,
    default: () => {
      return 100;
    },
  },
  imgHeight: {
    type: Number,
    default: () => {
      return 100;
    },
  },
  delay: {
    type: Number,
    default: () => {
      return 2000;
    },
  },
});
let timer = null;
let typedName = null;
let typedDescription = null;
const delay = () => {
  return props.delay;
};
onMounted(() => {
  timer = setInterval(() => {
    next();
  }, delay());
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
  clearInterval(timer);
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
}
</style>
