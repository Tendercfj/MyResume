<template>
  <Transition name="fade">
    <div class="meting-panel" v-if="visible">
      <!-- MetingJS 会自动把 <meting-js> 替换成播放器 -->
      <meting-js
        :server="server"
        :type="type"
        :id="id"
        :fixed="false"
        :mini="mini"
        :autoplay="true"
        :list-folded="false"
        theme="#ff6a88"
      />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useScreenSize } from '@/hooks/useScreenSize';
import { computed } from 'vue';

defineProps<{
  visible: boolean;
  server: "netease" | "tencent" | "kugou" | "baidu" | "xiami";
  type: "song" | "playlist" | "album" | "search";
  id: string;
}>();

const {width} = useScreenSize();
const mini = computed(() => {
  return width.value < 768 ? true : false;
})

// const emit = defineEmits(["close"]);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* .meting-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
} */
.meting-panel {
  position: absolute;
  bottom: 90%;
  right: 4rem;
  left: 4rem;
  margin-bottom: 1rem;
  z-index: 9999;
  min-width: 280px;
  border-radius: 12px;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .meting-panel {
    right: auto;
    left: 3rem;
    width: calc(100vw - 3rem);
    min-width: unset;
    bottom: 80%;
  }
}

:deep(.aplayer) {
  margin: 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2) !important;
  border-radius: 12px !important;
}
.close-btn {
  position: absolute;
  top: 6px;
  right: 6px;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
  color: #999;
}
</style>
