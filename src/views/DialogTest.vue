<template>
  <div v-show="isOpen" ref="dialogName" class="dialog w-[300px]">
    <div v-if="!firebaseShow">
      <div v-if="isShowClose" class="w-full flex justify-between">
        <div />
        <SvgIcon
          style="width: 24px; height: 24px"
          name="closeRounded"
          @click="handleClose"
        />
      </div>
      <div class="imgBtn w-full flex flex-col justify-center items-center">
        <div
          class="img w-full h-[200px] flex items-start justify-center overflow-auto"
        >
          <img class="max-w-full h-auto" :src="imageUrl" alt="Image" />
        </div>
        <button
          v-if="isShowBtn"
          class="w-full h-12 rounded-xl flex items-center justify-center font-medium text-base m-3"
          :style="{ background: btnBgColor, color: btnTextColor }"
          @click="goTo"
        >
          <span class="font-medium text-base leading-[18px]">
            {{ btnText }}
          </span>
        </button>
      </div>
    </div>
    <div
      v-else
      class="firebase w-[300px] flex-col justify-center items-center border-2 border-slate-300 px-4 py-8"
    >
      <div class="title font-bold text-lg mb-6">
        <span>{{ firebaseList.title }}</span>
      </div>
      <div class="description font-normal text-sm mb-2 w-[200px] leading-6">
        <span>{{ firebaseList.description }}</span>
      </div>
      <div class="flex justify-between w-full my-8">
        <div />
        <button
          class="updateBtn w-[100px] bg-green-700 h-[50px] rounded text-white flex justify-center items-center right-4"
        >
          <span>Update</span>
        </button>
      </div>
      <hr class="w-full mt-4" />
      <div
        class="google flex justify-start items-center w-[200px] bg-slate- mt-8"
      >
        <SvgIcon style="width: 24px; height: 24px" name="closeRounded" />
        <span class="text-2xl font-medium text-gray-600 ml-4">Google Play</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 导入必要的模块和组件
import { computed, ref } from "vue";
import SvgIcon from "../components/SvgIcon.vue";

// 状态变量
const isOpen = ref(true);
const isShowClose = ref(true);
const imageUrl = ref(
  "https://imgb14.photophoto.cn/20200823/haishangqingzhensi-38597731_3.jpg"
);
const btnText = ref("Go");
const btnBgColorArr = ref(["#FF6600", "#00FF00"]);
const btnTextColor = ref("#FFFFFF");
const isShowBtn = ref(true);
const firebaseShow = ref(false);
const firebaseList = {
  title: "Update TwDown?",
  description:
    "TwDown recommends that you update to the latest version. You can keep using this app while downloading the update.",
};

// 关闭对话框
const handleClose = () => {
  isOpen.value = false;
};

// 计算按钮背景颜色
const btnBgColor = computed(() => {
  if (btnBgColorArr.value.length === 1) {
    return btnBgColorArr.value[0];
  } else {
    return `linear-gradient(to bottom, ${btnBgColorArr.value.join(",")})`;
  }
});

// 点击转到事件
const goTo = () => {
  try {
    // 执行转到操作，例如导航
    console.log("Navigating...");
  } catch (error) {
    console.error("Navigation error:", error);
  }
};
</script>

<style scoped></style>
