<template>
  <div class="nav flex justify-between items-center" ref="nav">
    <ul
      :style="{
        width: props.Iwidth + '%',
        height: props.Iheight + 'px',
        background: props.Ibackground,
      }"
      :class="{ fixed: show }"
      class="min-w-[1337px] my-0 mx-auto flex items-center justify-around w-full px-[15%] py-0 shadow-lg shadow-indigo-500/40 rounded-b-xl"
    >
      <li
        v-for="(item, index) in props.navList"
        :key="item.id"
        :style="{ fontSize: props.IfontSize + 'px' }"
        @click="handleClick(index, item.id)"
        :class="{ active: index === activeIndex }"
        class="leading-[60px] px-[25px] py-0 text-[#777] font-bold hover:text-[#ef7674] hover:cursor-pointer transition-colors duration-300"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  navList: {
    type: Array,
    required: true,
    default: () => [],
  },
  Iwidth: {
    type: [String, Number],
    required: true,
    default: 50,
  },
  Iheight: {
    type: Number,
    required: true,
    default: 50,
  },
  Ibackground: {
    type: String,
    required: true,
    default: "#fff",
  },
  IfontSize: {
    type: Number,
    required: true,
    default: 12,
  },
});

const emit = defineEmits(["_click", "scroll"]);
const activeIndex = ref(0);
const show = ref(false);
const nav = ref(null);

const handleClick = (index, id) => {
  activeIndex.value = index;
  emit("_click", { index, id });
};

// 监听滚动位置更新导航状态
const handleScroll = () => {
  const top = nav.value?.getBoundingClientRect().top ?? 0;
  show.value = top <= 0;
  emit("scroll", show.value);

  // 更新当前活动的导航项
  updateActiveSection();
};

// 更新当前活动的导航项
const updateActiveSection = () => {
  const sections = document.querySelectorAll("section[id]");
  const scrollPosition = window.scrollY;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop - 100 &&
      scrollPosition < sectionTop + sectionHeight - 100
    ) {
      activeIndex.value = index;
    }
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}

.active {
  color: #ef7674;
}
</style>
