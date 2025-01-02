<!-- SvgIcon.vue 文件用于定义一个 SVG 图标组件 -->
<!-- How to use
path: './src/assets/svg/vue.svg',
<SvgIcon name="vue"></SvgIcon>
path: './src/assets/svg/dir-icon1.svg',
<SvgIcon name="dir-icon1"></SvgIcon>
-->

<template>
  <!-- 渲染 SVG 图标 -->
  <svg aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script>
import { defineComponent, computed } from "vue";

// 定义 SvgIcon 组件
export default defineComponent({
  name: "SvgIcon",
  props: {
    // 图标前缀，默认为 'icon'
    prefix: {
      type: String,
      default: "icon",
    },
    // 图标名称，必填
    name: {
      type: String,
      required: true,
    },
    // 图标颜色，默认为 '#333'
    color: {
      type: String,
      default: "#333",
    },
  },
  setup(props) {
    // 计算 SVG 图标的符号 ID
    const symbolId = computed(() => `#${props.prefix}-${props.name}`);
    return { symbolId };
  },
});
</script>
