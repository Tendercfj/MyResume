<template>
  <div class="shell h-full w-full flex">
    <div
      v-for="(item, index) in skillItem"
      :key="index"
      :class="`box img${index + 1}`"
    >
      <div class="text flex flex-col justify-center items-center">
        <header>
          <span class="title">{{ item.title }}</span>
        </header>
        <p>
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

type SkillItem = {
  title: string;
  description: string;
  backgroundImage?: string;
};

const props = defineProps<{
  skillItem?: SkillItem[];
}>();

const skillItem = computed(() => props.skillItem ?? []);
</script>

<style scoped>
body {
  overflow: hidden;
}
.box {
  flex: 1;
  min-width: 0;
  box-shadow: -20px 0 20px 5px rgba(255, 255, 255, 0.7);
  transition: flex 0.8s;
  background-size: cover;
  background-position: center;
  display: grid;
  place-items: center;
  border: 10px solid #fff;
}

.box:hover {
  flex: 2;
}

.box:hover .text {
  animation: appear 0.8s forwards 0.3s;
}
.img1 {
  background-image: url("../../../assets/svg/three.svg");
}

.img2 {
  background-image: url("../../../assets/svg/vue.svg");
}

.img3 {
  background-image: url("../../../assets/svg/react.svg");
}

.img4 {
  background-image: url("../../../assets/svg/git.svg");
}
.text {
  padding: 45px 75px;
  opacity: 0;
  color: rgb(255, 255, 255);
  height: 380px;
  width: 450px;
  background-color: rgba(0, 0, 0, 0.5);
}

header {
  height: 73px;
  font-size: 50px;
  font-family: 华文中宋;
  line-height: 50px;
  font-weight: bold;
  border-bottom: 2px solid white;
}

.title {
  display: inline-block;
  height: 65px;
  /* text-decoration: underline;
  text-underline-offset: 10px;
  text-decoration-thickness: 4px; */
}

.text p {
  margin: 30px 0;
  font-size: 15px;
}

@keyframes appear {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
