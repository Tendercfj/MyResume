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
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  background-size: cover;
  background-position: center;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  position: relative;
}

.box::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent, rgba(var(--brand-primary), 0.1));
  opacity: 0;
  transition: opacity 0.6s;
}

.box:hover {
  flex: 2.5;
  border-color: rgb(var(--brand-primary) / 0.5);
  box-shadow: 0 0 50px rgba(139, 92, 246, 0.3);
}

.box:hover::after {
  opacity: 1;
}

.box:hover .text {
  animation: appear 0.6s forwards 0.2s;
}

.img1 { background-image: url("../../../assets/svg/three.svg"); }
.img2 { background-image: url("../../../assets/svg/vue.svg"); }
.img3 { background-image: url("../../../assets/svg/react.svg"); }
.img4 { background-image: url("../../../assets/svg/git.svg"); }

.text {
  padding: 40px;
  opacity: 0;
  color: #fff;
  height: 100%;
  width: 100%;
  background-color: rgba(10, 10, 14, 0.75);
  backdrop-blur: 10px;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

header {
  margin-bottom: 20px;
  font-size: 40px;
  font-family: inherit;
  font-weight: 800;
  border-bottom: 3px solid rgb(var(--brand-primary));
  padding-bottom: 10px;
}

.title {
  display: inline-block;
  background: linear-gradient(135deg, #fff 0%, rgb(var(--brand-primary)) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text p {
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
  color: rgb(var(--text-muted));
}

@keyframes appear {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media screen and (max-width: 768px) {
  .shell {
    flex-direction: column;
    gap: 16px;
    padding: 0 16px;
  }
  .box {
    border-width: 1px;
    border-radius: 20px;
    min-height: 180px;
  }
  .box:hover {
    flex: 1;
  }
  .text {
    width: 100%;
    opacity: 1;
    background-color: rgba(10, 10, 14, 0.6);
    padding: 24px;
  }
  header {
    font-size: 24px;
    margin-bottom: 12px;
  }
}
</style>
