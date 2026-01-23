<template>
  <div class="nav" ref="nav">
    <!-- Desktop Navigation -->
    <ul
      :style="{
        width: props.Iwidth + '%',
        height: props.Iheight + 'px',
      }"
      :class="{ fixed: show }"
      class="hidden md:flex my-0 mx-auto items-center justify-between w-full max-w-[1337px] px-4 md:px-[10%] py-0 rounded-b-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-lg border-t-0 overflow-x-auto whitespace-nowrap no-scrollbar transition-all duration-300"
    >
      <li
        v-for="(item, index) in props.navList"
        :key="item.id"
        :style="{ fontSize: props.IfontSize + 'px' }"
        @click="handleClick(index, item.id)"
        :class="{ active: index === activeIndex }"
        class="nav-item leading-[60px] px-3 md:px-6 py-0 text-text-muted font-bold hover:text-brand-primary hover:cursor-pointer transition-all duration-300 shrink-0 relative overflow-hidden"
      >
        <span class="relative z-10">{{ item.text }}</span>
        <div class="active-indicator h-1 w-0 bg-brand-primary absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-300 rounded-t-full"></div>
      </li>
    </ul>

    <!-- Mobile Navigation Trigger -->
    <div
      :class="{ 'mobile-fixed': show }"
      class="md:hidden flex items-center justify-start w-fit px-4 h-[50px] transition-all duration-300 z-[100]"
    >
      <div
        @click="toggleMenu"
        class="p-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-lg shadow-lg hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center"
      >
        <svg
          class="w-6 h-6 text-text"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div
        v-if="isMenuOpen"
        @click="toggleMenu"
        class="fixed inset-0 z-[110] bg-black/70 backdrop-blur-[6px] md:hidden"
      >
        <Transition name="slide">
          <div
            v-if="isMenuOpen"
            @click.stop
            class="absolute left-0 top-0 bottom-0 w-[280px] bg-[#1a1c23]/90 backdrop-blur-2xl shadow-[20px_0_50px_rgba(0,0,0,0.5)] p-8 flex flex-col border-r border-white/10"
          >
            <div class="flex items-center justify-between mb-10">
              <div class="flex flex-col">
                <span class="text-2xl font-black text-brand-primary tracking-tighter">NAVIGATION</span>
                <div class="h-1 w-8 bg-brand-primary mt-1 rounded-full"></div>
              </div>
              <button
                @click="toggleMenu"
                class="p-2 rounded-xl bg-surface-3 text-text-muted hover:text-brand-primary hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            
            <nav class="flex-1">
              <ul class="flex flex-col gap-3">
                <li
                  v-for="(item, index) in props.navList"
                  :key="item.id"
                  @click="handleMobileClick(index, item.id)"
                  :class="[
                    index === activeIndex 
                    ? 'text-brand-primary bg-brand-primary/5 font-bold translate-x-1' 
                    : 'text-text-muted font-medium hover:text-brand-primary hover:bg-surface-3 hover:translate-x-1'
                  ]"
                  class="group flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 cursor-pointer"
                >
                  <span class="text-lg">{{ item.text }}</span>
                  <svg 
                    class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </li>
              </ul>
            </nav>

            <div class="mt-auto pt-8 border-t border-border/30">
              <p class="text-xs text-text-muted/50 uppercase tracking-widest font-semibold">Resume Portal v1.0</p>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

type NavItem = {
  text: string;
  id: string;
};

const props = withDefaults(
  defineProps<{
    navList: NavItem[];
    Iwidth?: string | number;
    Iheight?: number;
    Ibackground?: string;
    IfontSize?: number;
  }>(),
  {
    navList: () => [],
    Iwidth: 50,
    Iheight: 50,
    Ibackground: "#fff",
    IfontSize: 12,
  },
);

const emit = defineEmits<{
  (e: "_click", payload: { index: number; id: string }): void;
  (e: "scroll", value: boolean): void;
}>();
const activeIndex = ref(0);
const show = ref(false);
const isMenuOpen = ref(false);
const nav = ref<HTMLElement | null>(null);

const handleClick = (index: number, id: string) => {
  activeIndex.value = index;
  emit("_click", { index, id });
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

const handleMobileClick = (index: number, id: string) => {
  // 先关闭菜单，利用 transition 的硬件加速
  isMenuOpen.value = false;
  document.body.style.overflow = "";
  
  // 稍微延迟跳转，避开菜单关闭时的动画计算高峰，让动画更流畅
  setTimeout(() => {
    handleClick(index, id);
  }, 300); // 匹配 transition 时间
};

// 监听滚动位置更新导航状态
const handleScroll = () => {
  // 使用 requestAnimationFrame 优化滚动逻辑
  requestAnimationFrame(() => {
    const top = nav.value?.getBoundingClientRect().top ?? 0;
    show.value = top <= 0;
    emit("scroll", show.value);
    updateActiveSection();
  });
};

// 更新当前活动的导航项
const updateActiveSection = () => {
  const sections = document.querySelectorAll<HTMLElement>("section[id]");
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
  document.body.style.overflow = "";
});
</script>

<style scoped>
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 10px 40px rgb(0 0 0 / 0.4);
  border-radius: 0;
}

.mobile-fixed {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 100;
  padding: 0;
}

.active {
  color: rgb(var(--brand-primary));
}

.active .active-indicator {
  width: 60%;
}

.nav-item:hover .active-indicator {
  width: 30%;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
