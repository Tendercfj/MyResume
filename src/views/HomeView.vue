<template>
  <div class="home">
    <section class="home-swiper">
      <mySwiper
        :imgs="imgs"
        :name="name"
        :year="year"
        :imgWidth="100"
        :imgHeight="100"
        :delay="2500"
      />
    </section>
    <div class="home-nav">
      <myNav
        :navList="navList"
        :IWidth="100"
        :IHeight="60"
        IBackground="#fff"
        :ISize="18"
        @scroll="scroll"
        @_click="onClick"
      />
    </div>
    <section class="home-about">
      <aboutMe
        :show="show"
        :aboutMeText="data.aboutme"
        :aboutMeList="aboutMeList"
      />
    </section>
    <section class="home-skill">
      <mySkill :skillText="data.skillText" :skill="data.skill" />
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import mySwiper from "../components/swiper/mySwiper.vue";
import { useResumeStore } from "../store/resumeStore";
import myNav from "../components/nav/myNav.vue";
import aboutMe from "../components/about/aboutMe.vue";
import mySkill from "../components/skill/mySkill.vue";
import data from "../json/json";
const store = useResumeStore();
const imgs = ref(store.imgs);
const name = ref(store.name);
const year = ref(store.year);
const navList = ref(store.navList);
const aboutMeList = ref(store.aboutMeList);
const show = ref(false);
const scroll = (value) => {
  show.value = value;
};
const onClick = (value) => {
  console.log(value);
  const course = document.querySelectorAll("section");
  course[value].scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};
</script>

<style scoped>
.home {
  min-width: 1337px;
}
</style>
