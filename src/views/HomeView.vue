<template>
  <div class="home">
    <section id="swiper" class="home-swiper" v-lazy-load>
      <mySwiper v-bind="swiperProps" @loaded="handleSwiperLoaded" />
    </section>
    <div class="home-nav">
      <myNav
        v-bind="navProps"
        @scroll="handleScroll"
        @_click="handleSectionClick"
      />
    </div>
    <main class="home-content">
      <section
        v-for="section in sections"
        :key="section.id"
        :id="section.id"
        :class="`home-${section.id}`"
      >
        <component :is="section.component" v-bind="section.props" />
      </section>
    </main>
    <myMusic />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, reactive } from "vue";
import { useResumeStore } from "../store/resumeStore";
import mySwiper from "../components/swiper/mySwiper.vue";
import myNav from "../components/nav/myNav.vue";
import aboutMe from "../components/about/aboutMe.vue";
import mySkill from "../components/skill/mySkill.vue";
import myExperience from "../components/experience/myExperience.vue";
import myProject from "../components/project/myProject.vue";
import myTouch from "../components/touch/myTouch.vue";
import myMusic from "../components/bgmusic/myMusic.vue";
import data from "../json/json";

const store = useResumeStore();
const show = ref(false);

type Section = {
  id: string;
  component: unknown;
  props: Record<string, unknown>;
};

const sections = reactive<Section[]>([
  {
    id: "about",
    component: aboutMe,
    props: {
      show,
      aboutMeText: data.aboutme,
      aboutMeList: store.aboutMeList,
    },
  },
  {
    id: "skill",
    component: mySkill,
    props: {
      skillText: data.skillText,
      skill: data.skill,
    },
  },
  {
    id: "experience",
    component: myExperience,
    props: {
      experience: data.experience,
      experienceText: data.experienceText,
    },
  },
  {
    id: "project",
    component: myProject,
    props: {
      project: data.project,
    },
  },
  {
    id: "touch",
    component: myTouch,
    props: {
      touch: data.touch,
      inf: data.inf,
      phone: data.phone,
    },
  },
]);

const sectionIds = computed(() => [
  "swiper",
  ...sections.map((section) => section.id),
]);

const swiperProps = computed(() => ({
  imgs: store.imgs,
  name: store.name,
  year: store.year,
  imgWidth: 100,
  imgHeight: 100,
  delay: 3000,
}));

const navProps = computed(() => ({
  navList: store.navList.map((item, index) => ({
    ...item,
    id: sectionIds.value[index],
  })),
  Iwidth: 100,
  Iheight: 60,
  Ibackground: "#fff",
  IfontSize: 18,
}));

const handleScroll = (value: boolean) => {
  show.value = value;
};

const handleSectionClick = ({ id }: { index: number; id: string }) => {
  const targetSection = document.getElementById(id);
  if (targetSection) {
    const offset = 80;
    const targetPosition = targetSection.offsetTop - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
};

const handleSwiperLoaded = () => {
  // 处理轮播图加载完成后的逻辑
};

onMounted(() => {
  // 可以添加页面加载完成后的初始化逻辑
});
</script>

<style scoped>
.home {
  min-width: 1337px;
  max-width: 100vw;
  overflow-x: hidden;
}

.home-content {
  scroll-behavior: smooth;
}

.home section {
  scroll-margin-top: 80px;
}

@media screen and (max-width: 768px) {
  .home {
    min-width: 100%;
  }
}
</style>
