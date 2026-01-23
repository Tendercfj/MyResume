<template>
  <h3
    class="text-[28px] sm:text-[34px] leading-tight pb-3 font-black tracking-[0.05em] m-0 border-b-4 border-brand-primary shadow-[0_4px_10px_rgba(139,92,246,0.3)] inline-block text-white uppercase"
  >
    {{ props.title }}
  </h3>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
}>();
</script>

<style lang="scss" scoped></style>
