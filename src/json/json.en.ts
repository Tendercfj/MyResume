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
    "I build high-quality web and cross-platform apps with strong attention to user experience. I have solid expertise in React, Vue, TypeScript, and Tailwind CSS, plus backend experience with Node.js. I also use AI tools and skills-guided vibe coding to improve delivery speed and quality.",
  ],

  skillText:
    "Frontend growth requires long-term learning, broad technical foundations, and continuous passion for new technologies.",
  skill: [
    "JavaScript",
    "Vue",
    "React",
    "Less/scss",
    "TailwindCSS",
    "TypeScript",
    "Node",
    "React Native",
    "Next",
    "Vite",
    "Webpack",
    "Vibe Coding",
  ],
  skillItem: [
    {
      title: "HTML+CSS+JS",
      description:
        "Proficient in HTML5, CSS3, JavaScript (ES6), and TypeScript with solid frontend fundamentals.",
      backgroundImage: `url("${skillCoverBase.three}")`,
    },
    {
      title: "VUE",
      description:
        "Experienced with Vue 3, component-driven development, Vue Router, and Pinia in production projects.",
      backgroundImage: `url("${skillCoverBase.vue}")`,
    },
    {
      title: "REACT",
      description:
        "Familiar with React, Hooks-based component development, react-router, and redux in real projects.",
      backgroundImage: `url("${skillCoverBase.react}")`,
    },
    {
      title: "SKILL",
      description:
        "Skilled in Git-based collaboration, Axios data communication, and UI libraries such as ElementUI and AntDesign.",
      backgroundImage: `url("${skillCoverBase.git}")`,
    },
    {
      title: "VIBE CODING",
      description:
        "Able to use vibe coding with skills constraints to improve coding efficiency, quality, and accuracy.",
      backgroundImage: `url("${skillCoverBase.vibeCoding}")`,
    },
  ],

  experienceText:
    "I completed my undergraduate studies at Tongling University and my master's degree at Hangzhou Normal University. During my master's program, I worked as a frontend intern at Yushen No.5, Yingsha Telecom, and Mitatan for around one and a half years in total. I am currently a frontend engineer at Mitatan.",
  experience: [
    {
      company: "Mitatan",
      job: "Frontend Engineer (Full-time)",
      reap: "Responsible for frontend development of core company projects.",
      beginTime: "2026-1",
      endTime: "Present",
    },
    {
      company: "Mitatan",
      job: "Web Frontend Intern",
      reap: "Focused on frontend development for the company's bid-related projects.",
      beginTime: "2025-9",
      endTime: "2025-12",
    },
    {
      company: "Yingsha Telecom",
      job: "Web Frontend Intern",
      reap: "Worked on operation platforms, client-facing platforms, and the official website.",
      beginTime: "2025-6",
      endTime: "2025-9",
    },
    {
      company: "Yushen No.5",
      job: "Web Frontend Intern",
      reap: "Developed self-operated products including website, admin platform, PWA, tracking, and bug fixes.",
      beginTime: "2024-9",
      endTime: "2025-2",
    },
  ],

  project: [
    {
      cover: cover1,
      name: "New Energy Power Forecasting System",
      summary:
        "Implemented real-time weather monitoring and power forecasting with large models, and visualized results with ECharts.",
      highlights: [
        "Frontend design and implementation using React, Less, ECharts, and TailwindCSS.",
        "Improved project performance by compressing static assets and extracting shared components with AI tools.",
        "Applied vibe coding with handcrafted prompts to improve AI coding accuracy and efficiency.",
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
      name: "Vision AI Design Platform",
      summary:
        "Built an intelligent photovoltaic bracket design solution by integrating large models, SAP2000, SolidWorks, and enterprise systems (CRM, ERP, and quoting).",
      highlights: [
        "Frontend design and implementation using React, Less, and TailwindCSS.",
        "Wrapped Ant Design Form for configuration-driven development and reduced repetitive code by 40%.",
        "Built a reusable Metasheet component to unify repeated query and table workflows.",
        "Optimized project performance by compressing static resources and improving user experience.",
        "Adopted responsive layout for cross-screen compatibility.",
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
  ],

  contact: {
    email: "1805150751@qq.com",
    phone: "17384340081",
    github: "https://github.com/Tendercfj",
  },
};

export default data;
