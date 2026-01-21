<template>
  <h3
    class="text-[36px] leading-[38px] pb-[9px] font-[800] transform uppercase m-0 border-b-[6px] border-b-brand-primary border-b-solid inline-block text-text"
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
