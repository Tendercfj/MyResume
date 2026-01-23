<template>
  <div class="music fixed right-[-1rem] bottom-14">
    <!-- <audio ref="audio" autoplay loop>
      <source src="./songs/LoveStory.mp3" />
    </audio> -->
    <!-- <div @click="toggleMusic" class="cursor-pointer"> -->
    <!-- <SvgIcon style="width: 56px; height: 56px" name="music" /> -->
    <Vue3Lottie
      :animationData="AnimaBot"
      :ref="lottie"
      :width="lottieWidth"
      :height="lottieHeight"
      @click="showPlayer = !showPlayer"
      class="cursor-pointer"
    />
    <!-- </div> -->
    <MetingPlayer
      :visible="showPlayer"
      server="netease"
      type="playlist"
      id="129627424"
    />
  </div>
</template>

<script setup lang="ts">
// import SvgIcon from "../SvgIcon.vue";
import { computed, ref } from "vue";
import { Vue3Lottie } from "vue3-lottie";
import AnimaBot from "@/assets/JSON/AnimaBot.json";
import { useScreenSize } from "@/hooks/useScreenSize";
import MetingPlayer from "./components/MetingPlayer.vue";

const audio = ref<HTMLAudioElement | null>(null);

const lottie = ref<any>(null);

const showPlayer = ref(false);

const { width } = useScreenSize();
// console.log(width.value);

const lottieWidth = computed(() => {
  return width.value > 768 ? 400 : 150;
});
const lottieHeight = computed(() => {
  return width.value > 768 ? 300 : 120;
});

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
