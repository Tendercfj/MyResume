<template>
  <h3
    class="text-[36px] leading-[38px] pb-[9px] font-[800] transform uppercase m-0 border-b-[6px] border-b-[#ef7674] border-b-solid inline-block"
  >
    {{ props.title }}
  </h3>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
