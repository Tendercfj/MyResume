<template>
  <div class="music fixed right-[-1rem] bottom-14" ref="root">
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
      @click="handleTogglePlayer"
      class="cursor-pointer"
    />
    <!-- </div> -->
    <div
      v-if="showPlayer && isPlayerLoading"
      class="meting-loading"
      role="status"
      aria-live="polite"
    >
      <div class="meting-loading__inner">
        <span class="meting-loading__spinner" aria-hidden="true"></span>
        <p class="meting-loading__text">{{ loadingText }}</p>
      </div>
    </div>
    <MetingPlayer
      :visible="showPlayer"
      server="netease"
      type="playlist"
      id="9095117494"
    />
  </div>
</template>

<script setup lang="ts">
// import SvgIcon from "../SvgIcon.vue";
import { computed, ref, watch } from "vue";
import { Vue3Lottie } from "vue3-lottie";
import AnimaBot from "@/assets/JSON/AnimaBot.json";
import { useScreenSize } from "@/hooks/useScreenSize";
import MetingPlayer from "./components/MetingPlayer.vue";
import { useResumeStore } from "@/store/resumeStore";
const store = useResumeStore();

const audio = ref<HTMLAudioElement | null>(null);

const lottie = ref<any>(null);
const root = ref<HTMLElement | null>(null);

const showPlayer = ref(false);
const isPlayerLoading = ref(false);
const loadingStartedAt = ref<number | null>(null);
const loadingTick = ref(0);
let loadingTimer: number | null = null;

const { width } = useScreenSize();
// console.log(width.value);

const lottieWidth = computed(() => {
  return width.value > 768 ? 400 : 150;
});
const lottieHeight = computed(() => {
  return width.value > 768 ? 300 : 120;
});

const loadingText = computed(() => {
  // 触发定时更新（用于“网络较慢”的提示）
  void loadingTick.value;
  if (!loadingStartedAt.value) return store.uiText.music.loading;
  return Date.now() - loadingStartedAt.value > 3500
    ? store.uiText.music.slowLoading
    : store.uiText.music.loading;
});

const toggleMusic = () => {
  if (!audio.value) return;
  if (audio.value.paused) {
    void audio.value.play();
  } else {
    audio.value.pause();
  }
};

let openRequestId = 0;

const startLoading = () => {
  isPlayerLoading.value = true;
  loadingStartedAt.value = Date.now();
  loadingTick.value = 0;

  if (loadingTimer != null) window.clearInterval(loadingTimer);
  loadingTimer = window.setInterval(() => {
    loadingTick.value += 1;
  }, 500);
};

const stopLoading = () => {
  isPlayerLoading.value = false;
  loadingStartedAt.value = null;
  if (loadingTimer != null) {
    window.clearInterval(loadingTimer);
    loadingTimer = null;
  }
};

const ensureMinLoading = async (minMs: number) => {
  const startedAt = loadingStartedAt.value;
  if (!startedAt) return;
  const elapsed = Date.now() - startedAt;
  if (elapsed >= minMs) return;
  await new Promise((resolve) => setTimeout(resolve, minMs - elapsed));
};

const waitForMetingCdn = async (requestId: number) => {
  const isReady = () =>
    typeof window !== "undefined" &&
    typeof customElements !== "undefined" &&
    !!customElements.get("meting-js") &&
    !!(window as any).APlayer;

  if (isReady()) return;

  try {
    await customElements.whenDefined("meting-js");
  } catch {
    // 忽略：whenDefined 在极端环境下可能抛错（不影响后续兜底检查）
  }

  if (requestId !== openRequestId || !showPlayer.value) return;

  const start = Date.now();
  while (!isReady() && Date.now() - start < 8000) {
    await new Promise((resolve) => setTimeout(resolve, 50));
    if (requestId !== openRequestId || !showPlayer.value) return;
  }
};

const waitForPlayerDom = async (requestId: number) => {
  const hasPlayer = () => !!root.value?.querySelector(".meting-panel .aplayer");
  if (hasPlayer()) return;

  const start = Date.now();
  while (!hasPlayer() && Date.now() - start < 8000) {
    await new Promise((resolve) => setTimeout(resolve, 50));
    if (requestId !== openRequestId || !showPlayer.value) return;
  }
};

const handleTogglePlayer = async () => {
  const nextVisible = !showPlayer.value;
  showPlayer.value = nextVisible;

  if (nextVisible) {
    startLoading();
  } else {
    stopLoading();
  }
};

watch(
  showPlayer,
  async (visible) => {
    openRequestId += 1;
    const requestId = openRequestId;

    if (!visible) {
      stopLoading();
      return;
    }

    await waitForMetingCdn(requestId);
    if (requestId !== openRequestId || !showPlayer.value) return;

    await waitForPlayerDom(requestId);
    if (requestId !== openRequestId || !showPlayer.value) return;

    await ensureMinLoading(300);
    if (requestId !== openRequestId || !showPlayer.value) return;

    stopLoading();
  },
  { flush: "post" },
);
</script>

<style scoped>
.meting-loading {
  position: fixed;
  left: 50%;
  bottom: calc(3.5rem + 0.75rem + env(safe-area-inset-bottom));
  transform: translateX(-50%);
  z-index: 10000;
  width: min(520px, calc(100vw - 2rem));
  min-width: 280px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(26, 28, 35, 0.78);
  backdrop-filter: blur(14px);
  pointer-events: none;
}

.meting-loading__inner {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
}

.meting-loading__spinner {
  width: 16px;
  height: 16px;
  border-radius: 999px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-top-color: rgba(255, 255, 255, 0.85);
  animation: metingSpin 0.85s linear infinite;
}

.meting-loading__text {
  margin: 0;
  font-size: 13px;
  line-height: 1.3;
  color: rgba(248, 250, 252, 0.85);
}

@keyframes metingSpin {
  to {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 768px) {
  .meting-loading {
    left: 1rem;
    right: 1rem;
    width: auto;
    min-width: unset;
    transform: none;
    bottom: calc(3.5rem + 0.75rem + env(safe-area-inset-bottom));
  }
  .meting-loading__inner {
    padding: 12px 14px;
  }
  .meting-loading__text {
    font-size: 12px;
  }
}
</style>
