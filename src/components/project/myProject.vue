<template>
  <div class="project w-full bg-white block">
    <div class="content w-[88%] py-[90px] px-[15px] mx-auto text-center">
      <commonTitle :title="title" />
      <div class="mt-4" v-for="(item, index) in props.project" :key="index.id">
        <h4
          style="
            text-align: center;
            color: #5b4c5c;
            padding-bottom: 1px;
            font-size: 25px;
          "
        >
          {{ item.name }}
        </h4>
        <div
          class="projectbox w-full flex pt-[45px] ml-[98px]"
          v-for="(i, index) in item.list"
          :key="index"
        >
          <div
            class="protime w-[16.66666667%] flex justify-center items-center mr-3"
          >
            <span
              class="bagin block text-[18px] py-0 px-[21px] whitespace-nowrap float-right mb-[2px] mr-[28px] font-bold text-white leading-[40px] bg-[#ef7674]"
              >{{ i.beginTime }}</span
            >
            <span
              class="end block text-[18px] py-0 px-[21px] whitespace-nowrap float-right mb-[2px] mr-[28px] font-bold text-white leading-[40px] bg-[#483c49]"
              >{{ i.endTime }}</span
            >
          </div>
          <div class="expbox">
            <div
              class="pic ml-[-26px] mt-[32px] float-left w-[22px] h-[22px]"
            ></div>
            <div class="title pt-0 pr-[47px] pb-[6px] pl-[70px]">
              <h4 class="m-0 text-left text-[#5b4c5c] pb-[1px] text-[19px]">
                {{ i.proName }}
              </h4>
              <h5
                class="-0 text-left text-[16px] leading-6 pb-[11px] font-[400] text-[#5b4c5c] mt-[10px]"
              >
                项目周期：{{ i.period }}
              </h5>
              <p class="text-left">{{ i.describe }}</p>
              <p class="lis">
                <span>
                  <p v-for="(ele, index) in i.science" :key="index">
                    {{ ele }}
                  </p>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import commonTitle from "../title/commonTitle.vue";
const title = ref("项目经历");
const props = defineProps({
  project: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.expbox {
  border-left: dashed 1px #897f8a;
  padding: 0px 15px;
}
.pic {
  background: url("../../assets/arrow-left.png") no-repeat 0 0 #f8f7f8;
}
.lis {
  color: rgb(58, 54, 54);
}
</style>
