<template>
  <h3
    class="text-[28px] sm:text-[34px] leading-tight pb-3 font-extrabold tracking-tight m-0 border-b-4 border-b-brand-primary/80 border-b-solid inline-block text-text"
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
