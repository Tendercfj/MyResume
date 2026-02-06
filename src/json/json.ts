import type { ResumeData } from "./types";

const cover1 = new URL("../assets/project/1.png", import.meta.url).href;
const cover2 = new URL("../assets/project/2.png", import.meta.url).href;
const skillCoverBase = {
  three: new URL("../assets/svg/three.svg", import.meta.url).href,
  vue: new URL("../assets/svg/vue.svg", import.meta.url).href,
  react: new URL("../assets/svg/react.svg", import.meta.url).href,
  git: new URL("../assets/svg/git.svg", import.meta.url).href,
  vibeCoding: new URL("../assets/vibeCoding.png", import.meta.url).href,
};

const data: ResumeData = {
  aboutme: [
    "我能够开发高质量的Web和跨端应用，能注重用户体验，对Web性能有深入的理解，对前端工程化有浓厚兴趣。我拥有React、Vue、TypeScript、Tailwind CSS 等前端技术的丰富经验，同时也具备 Node.js等后端开发经验。并且能够熟练使用各种AI工具和Skills进行Vibe Coding，提升编程效率。",
  ],

  skillText:
    "前端开发需要一个持续和长期的学习，需要在各种领域都有充足的知识储备，需要对新技术的学习保持热情。",
  skill: [
    "JavaSript",
    "Vue",
    "React",
    "Less/scss",
    "TailwindCSS",
    "Typescript",
    "Node",
    "React Native",
    "Next",
    "Vite",
    "Webpack",
    "Vibe Coding"
  ],
  skillItem: [
    {
      title: "HTML+CSS+JS",
      description:
        "熟悉HTML5、CSS3、JavaScript（ES6）和TypeScript，具备扎实的前端开发基础。",
      backgroundImage: `url("${skillCoverBase.three}")`,
    },
    {
      title: "VUE",
      description:
        "熟悉Vue3.js框架，熟悉组件化开发，熟悉VueRouter路由和Pinia状态管理库，有相关VUE实际项目经验。",
      backgroundImage: `url("${skillCoverBase.vue}")`,
    },
    {
      title: "REACT",
      description:
        "熟悉React框架，了解React Hooks组件化开发，熟悉react-router路由和redux状态管理库，有相关REACT实际项目经验。",
      backgroundImage: `url("${skillCoverBase.react}")`,
    },
    {
      title: "SKILL",
      description:
        "能使用git进行版本控制和团队协作。熟练使用Axios进行前后端数据交互，熟悉ElementUI、AntDesign等组件库的使用，熟悉TailwindCSS的使用。",
      backgroundImage: `url("${skillCoverBase.git}")`,
    },
    {
      title: "VIBE CODING",
      description:
        "能使用vibe coding进行编程，提升编程效率，提升编程能力；能配合相关SKILLS对Coding过程进行相关约束，提高Coding的准确度。",
      backgroundImage: `url("${skillCoverBase.vibeCoding}")`,
    },
  ],

  experienceText:
    "本科就读于铜陵学院，硕士毕业于杭州师范大学。在硕士期间，曾在杭州宇神五号、盈沙电讯、米塔碳公司担任前端实习生，实习经历为一年半。目前就职于杭州米塔碳公司，主要负责公司相关产品的前端开发。",
  experience: [
    {
      company: "米塔碳",
      job: "前端开发工程师（已转正）",
      reap: "在这家公司主要负责该公司相关项目的前端开发，",
      beginTime: "2026-1",
      endTime: "至今",
    },
    {
      company: "米塔碳",
      job: "web前端实习生",
      reap: "在这家公司主要负责该公司招标的相关项目的前端开发，",
      beginTime: "2025-9",
      endTime: "2025-12",
    },
    {
      company: "盈沙电讯",
      job: "web前端实习生",
      reap: "在这家公司主要负责该公司运营平台、对外使用的平台和官网的前端开发，",
      beginTime: "2025-6",
      endTime: "2025-9",
    },
    {
      company: "宇神五号",
      job: "web前端实习生",
      reap: "在这家公司主要负责该公司自营的产品，有官网，管理平台，PWA，项目的埋点，相关bug的修复等等，",
      beginTime: "2024-9",
      endTime: "2025-2",
    },

    // {
    //   company: "广州市本该科技有限责任公司",
    //   job: "web前端工程师",
    //   reap: "这段时间是自己前端开发技能得到不少提高的阶段。自己是公司的小白前端前端，公司的官网、日常的运营页面、新项目的开发我都有参与学习。工作非常饱和，但是在闲暇时候抽空学了很多新的框架和库，对Vue和React有了一定的了解，而选择了轻巧、高性能、可组件化的Vue.js作为主攻的MVVM框架，开始涉及WebPack，ECMAScript6，Node.js(Express)等的学习，熟练使用npm、yarn等工具。",
    //   beginTime: "2017-07",
    //   endTime: "2019-09",
    // },
  ],

  project: [
    {
      cover: cover1,
      name: "新能源功率预测系统",
      summary:
        "实现相关天气数据的实时监控，并通过相关大模型预测相关功率数据，使用echarts图表的形式对数据进行展示。",
      highlights: [
        "前端页面设计：负责项目前端页面的设计和布局，使用react，less，echarts和tailwindcss等技术实现页面交互效果。",
        "项目优化：通过压缩静态资源等方式，优化项目性能；通过ai工具抽离相关公共组件，提高开发效率",
        "本人结合vibe coding进行的页面开发，手动编写相关前端提示词，优化ai编程的准确率和效率。",
      ],
      stack: [
        "react",
        "umimax",
        "typescript",
        "antd pro",
        "echarts",
        "zustand",
        "tailwindcss",
      ],
    },
    {
      cover: cover2,
      name: "帷盛AI设计平台",
      summary:
        "帷盛科技 AI 自动设计项目旨在通过整合大模型算法、结构计算工具（SAP2000）、三维建模工具（SolidWorks）及企业现有系统（CRM、ERP、报价系统），构建一套智能化的光伏支架设计解决方案",
      highlights: [
        "前端页面设计：负责项目前端页面的设计和布局，使用react，less和tailwindcss等技术实现页面交互效果。",
        "组件优化：针对项目表单过多的情况，对antd的Form组件进行了二次封装，采用配置化代码，减少了40%的代码重复工作。",
        "组件优化：针对重复的query和table统一封装了Metasheet组件，支持配置化传参",
        "项目优化：通过压缩静态资源等方式，优化项目性能，提升用户体验。",
        "跨屏幕尺寸适配：采用响应式布局，兼容性优化，实现不同尺寸设备的页面适配。",
      ],
      stack: [
        "react",
        "typescript",
        "mapgl",
        "zustand",
        "umimax",
        "tailwindcss",
      ],
    },
    // {
    //   cover: "",
    //   name: "线下支付页（Solid.js）",
    //   summary:
    //     "使用 Solid.js 构建的轻量支付页面，支持登录、商品展示与支付跳转。",
    //   highlights: [
    //     "Google 登录后获取商品列表并渲染",
    //     "多语言切换与操作提示优化",
    //     "支付流程跳转与状态提示",
    //   ],
    //   stack: ["Solid.js", "TailwindCSS", "i18next"],
    // },
  ],

  contact: {
    email: "1805150751@qq.com",
    phone: "17384340081",
    github: "https://github.com/Tendercfj",
  },
};

export default data;
