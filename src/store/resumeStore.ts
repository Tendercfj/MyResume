import { defineStore } from "pinia";
import { computed, ref } from "vue";

type NavItem = {
  text: string;
  id: string;
};

type AboutMeItem = {
  src: string;
  title: string;
};

type SwiperImage = {
  src: string;
};

// 头部图片引入
import img1 from "../assets/header-bg1.jpg";
import img2 from "../assets/header-bg2.jpg";
import img3 from "../assets/header-bg3.jpg";
import img4 from "../assets/header-bg4.jpg";

// 关于我图片引入
import svg1 from "../assets/i_age.svg";
import svg2 from "../assets/i_edu.svg";
import svg3 from "../assets/i_site.svg";
import svg4 from "../assets/i_status.svg";

export const useResumeStore = defineStore("resume", () => {
  const count = ref(0);
  const imgs: SwiperImage[] = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
  ];
  const name = "Tender";
  const year = "半";
  const navList: NavItem[] = [
    { text: "首页", id: "#home" },
    { text: "关于我", id: "aboutme" },
    { text: "技能", id: "skill" },
    { text: "经历", id: "experience" },
    { text: "项目经历", id: "project" },
    { text: "联系我", id: "touch" },
  ];
  const aboutMeList: AboutMeItem[] = [
    {
      src: svg1,
      title: "25岁",
    },
    {
      src: svg2,
      title: "硕士",
    },
    {
      src: svg3,
      title: "杭州",
    },
    {
      src: svg4,
      title: "寻找机遇",
    },
  ];
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  return {
    count,
    doubleCount,
    increment,
    imgs,
    name,
    year,
    navList,
    aboutMeList,
  };
});
