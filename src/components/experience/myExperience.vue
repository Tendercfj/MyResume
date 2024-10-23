<template>
  <div class="experience w-full bg-[#f3f2f3] block">
    <div class="content w-[80%] pt-[90px] px-[15px] mx-auto text-center">
      <commonTitle :title="title" />
      <p
        class="max-w-[1100px] my-0 mx-auto text-[16px] leading-[27px] font-[400] text-[#897f8a] pt-[26px] pb-[45px]"
      >
        {{ props.experienceText }}
      </p>
    </div>
    <div
      class="conbox w-full flex justify-center items-center"
      v-for="(item, index) in props.experience"
      :key="index.id"
    >
      <div class="timebox w-[16.66666667%] flex justify-center items-center">
        <span class="begin bg-[#ef7674]">{{ item.beginTime }}</span>
        <span class="end bg-[#483c49]">{{ item.endTime }}</span>
      </div>
      <div class="companybox m-4">
        <div
          class="pic ml-[-26px] mt-[32px] float-left w-[22px] h-[22px]"
        ></div>
        <div
          class="title pt-0 pr-[47px] pb-[6px] pl-[70px] flex justify-start items-center gap-4"
        >
          <h4 class="m-0 text-left text-[#5b4c5c] pb-[1px] text-[19px]">
            {{ item.company }}
          </h4>
          <h5
            class="m-0 text-left text-[16px] leading-6 pb-[11px] font-[400] text-[#5b4c5c] mt-[10px]"
          >
            {{ item.job }}
          </h5>
        </div>
        <p class="text-left ml-[70px] max-w-[1200px]">{{ item.reap }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import commonTitle from "../title/commonTitle.vue";
const title = ref("经历");
const props = defineProps({
  experience: {
    type: Array,
  },
  experienceText: {
    type: String,
  },
});
</script>

<style scoped>
span {
  display: block;
  font-size: 18px;
  padding: 0 21px;
  white-space: nowrap;
  float: right;
  margin-bottom: 2px;
  margin-right: 28px;
  font-weight: bold;
  color: #fff;
  line-height: 40px;
}
.companybox {
  border-left: dashed 1px #897f8a;
  padding: 0px 15px;
}
.pic {
  background: url("../../assets/arrow-left.png") no-repeat 0 0 #f8f7f8;
}
</style>
