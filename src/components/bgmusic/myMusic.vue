<template>
  <div class="music fixed right-2 bottom-14">
    <audio ref="audio" autoplay loop>
      <source src="./songs/LoveStory.mp3" />
    </audio>
    <div class="bgImg cursor-pointer" @click="toggleMusic">
      <SvgIcon style="width: 56px; height: 56px" name="music" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from "../SvgIcon.vue";
import { ref } from "vue";

const audio = ref<HTMLAudioElement | null>(null);

const toggleMusic = () => {
  if (!audio.value) return;
  if (audio.value.paused) {
    void audio.value.play();
  } else {
    audio.value.pause();
  }
};
</script>

<style lang="scss" scoped></style>
