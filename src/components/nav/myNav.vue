<template>
  <div class="nav flex justify-between items-center" ref="nav">
    <ul
      :style="{
        width: props.Iwidth + '%',
        height: props.Iheight + 'px',
        background: props.Ibackground,
      }"
      :class="show ? 'fixed' : 'null'"
      class="min-w-[1337px] my-0 mx-auto flex items-center justify-around w-full px-[15%] py-0 shadow-lg shadow-indigo-500/40 rounded-xl"
    >
      <li
        v-for="(item, index) in props.navList"
        :key="index"
        :style="{ fontSize: props.IfontSize + 'px' }"
        @click="setColor(index)"
        :class="{ active: index === num }"
        v-text="item.text"
        :data-id="item.text"
        class="leading-[60px] px-[25px] py-0 text-[#777] font-bold hover:text-[#ef7674] hover:cursor-pointer"
      ></li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, defineEmits, onUnmounted } from "vue";
const props = defineProps({
  navList: {
    type: Array,
    required: true,
    default: () => {
      return [];
    },
  },
  Iwidth: {
    // eslint-disable-next-line vue/require-prop-type-constructor
    type: String | Number,
    required: true,
    default: () => {
      return 50;
    },
  },
  Iheight: {
    type: Number,
    required: true,
    default: () => {
      return 50;
    },
  },
  Ibackground: {
    type: String,
    required: true,
    default: () => {
      return "#fff";
    },
  },
  IfontSize: {
    type: Number,
    required: true,
    default: () => {
      return 12;
    },
  },
});
const emit = defineEmits(["_click", "scroll"]);
const setColor = (index) => {
  num.value = index;
  emit("_click", num.value);
};
const num = ref(0);
const show = ref(false);
const nav = ref(null);
const handleScroll = (entries) => {
  const top = nav.value.getBoundingClientRect().top;
  show.value = top <= 0 ? true : false;
  // entries.forEach((entry) => {
  //   show.value = !entry.isIntersecting;
  //   console.log(show.value);
  //   emit("scroll", show.value);
  // });
  emit("scroll", show.value);
};
// let observer = null;
onMounted(() => {
  window.addEventListener("scroll", handleScroll, true);
  // observer = new IntersectionObserver(handleScroll, {
  //   threshold: 0,
  // });

  // if (nav.value) {
  //   observer.observe(nav.value); // 观察 nav 元素
  // }
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll, true);
  // if (observer && nav.value) {
  //   observer.unobserve(nav.value);
  // } // 停止观察 nav 元素
});
</script>

<style scoped>
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
}
.active {
  color: #ef7674;
}
</style>
