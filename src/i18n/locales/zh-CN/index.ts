import packageInfo from "../../../../package.json";

const zhCN = {
  profile: {
    year: "半",
  },
  nav: {
    items: ["首页", "关于我", "技能", "经历", "项目经历", "联系我"],
    drawerTitle: "导航",
    version: `Tender的简历 v${packageInfo.version}`,
  },
  about: {
    cards: ["25岁", "硕士", "杭州", "寻找机遇"],
    imageAlt: "关于我",
    title: "关于我",
  },
  skill: {
    title: "技能 - 个人优势",
  },
  experience: {
    title: "经历",
  },
  project: {
    title: "项目经历",
    emptyCover: "项目封面图（待补充）",
    highlights: "亮点",
  },
  touch: {
    title: "联系我",
    email: "邮箱",
    phone: "电话",
  },
  music: {
    loading: "加载播放器中...",
    slowLoading: "网络较慢，仍在加载播放器...",
  },
  swiper: {
    imageAlt: "封面轮播图",
    greeting: "你好，我叫{name}，欢迎来到我的简历！",
    summary:
      "我是一名前端开发工程师，{year}年工作经验，现就职于杭州米塔碳公司，主要负责前端开发工作。",
  },
};

export default zhCN;
