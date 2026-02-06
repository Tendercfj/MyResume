<template>
  <div class="home">
    <section
      id="swiper"
      class="home-swiper"
      v-lazy-load="{ animation: 'fade', duration: 700 }"
    >
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
        v-for="(section, index) in sections"
        :key="section.id"
        :id="section.id"
        :class="`home-${section.id}`"
        v-lazy-load="{
          animation: index % 2 === 0 ? 'fade-left' : 'fade-right',
          duration: 680,
          delay: Math.min(index * 140, 560),
          rootMargin: '0px 0px -12% 0px',
        }"
      >
        <component :is="section.component" v-bind="section.props" />
      </section>
    </main>
    <myMusic />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useResumeStore } from "../store/resumeStore";
import mySwiper from "../components/swiper/mySwiper.vue";
import myNav from "../components/nav/myNav.vue";
import aboutMe from "../components/about/aboutMe.vue";
import mySkill from "../components/skill/mySkill.vue";
import myExperience from "../components/experience/myExperience.vue";
import myProject from "../components/project/myProject.vue";
import myTouch from "../components/touch/myTouch.vue";
import myMusic from "../components/bgmusic/myMusic.vue";
import dataZh from "../json/json";
import dataEn from "../json/json.en";
import type { ResumeData } from "../json/types";

const store = useResumeStore();
const show = ref(false);

type Section = {
  id: string;
  component: unknown;
  props: Record<string, unknown>;
};

const resumeData = computed<ResumeData>(() =>
  store.locale === "en-US" ? dataEn : dataZh,
);

const sections = computed<Section[]>(() => [
  {
    id: "about",
    component: aboutMe,
    props: {
      show: show.value,
      aboutMeText: resumeData.value.aboutme,
      aboutMeList: store.aboutMeList,
    },
  },
  {
    id: "skill",
    component: mySkill,
    props: {
      skillText: resumeData.value.skillText,
      skill: resumeData.value.skill,
      skillItem: resumeData.value.skillItem,
    },
  },
  {
    id: "experience",
    component: myExperience,
    props: {
      experience: resumeData.value.experience,
      experienceText: resumeData.value.experienceText,
    },
  },
  {
    id: "project",
    component: myProject,
    props: {
      project: resumeData.value.project,
    },
  },
  {
    id: "touch",
    component: myTouch,
    props: {
      contact: resumeData.value.contact,
    },
  },
]);

const sectionIds = computed(() => [
  "swiper",
  ...sections.value.map((section) => section.id),
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
  Ibackground: "rgb(var(--surface-2))",
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
  width: 100%;
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
    width: 100%;
  }
}
</style>
