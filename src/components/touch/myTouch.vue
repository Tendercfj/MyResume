<template>
  <div class="touch w-full bg-[#f3f2f3] block">
    <div class="content py-[90px] px-[15px] mx-auto text-center">
      <commonTitle :title="title" />
      <ul class="pt-[45px]">
        <li v-for="(item, index) in props.touch" :key="index">
          {{ item }}
        </li>
      </ul>
      <p v-for="(item, index) in props.inf" :key="index">
        {{ item }}
      </p>
      <p class="github-link" @click="handleGithub">Resume - GiuHub</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import commonTitle from "../title/commonTitle.vue";
const title = ref("联系我");
const props = defineProps({
  touch: {
    type: Array,
  },
  inf: {
    type: Array,
  },
});
//TODO: github
const handleGithub = () => {
  window.location.href = "https://github.com/Tendercfj/myResume";
};
</script>

<style scoped>
li {
  font-size: 16px;
  padding-bottom: 10px;
  color: #5b4c5c;
  transition: color 0.15s ease-in;
  width: 20%;
  margin: auto;
}
li:hover {
  color: orangered;
  cursor: pointer;
}
p {
  color: rgb(241, 71, 28);
  font-size: 20px;
  font-weight: bold;
}
.github-link {
  text-decoration: underline;
  cursor: pointer;
}
</style>
