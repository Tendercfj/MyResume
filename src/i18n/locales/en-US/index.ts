import packageInfo from "../../../../package.json";

const enUS = {
  profile: {
    year: "0.5",
  },
  nav: {
    items: ["Home", "About", "Skills", "Experience", "Projects", "Contact"],
    drawerTitle: "Navigation",
    version: `Tender's Resume v${packageInfo.version}`,
  },
  about: {
    cards: ["25 years", "Master", "Hangzhou", "Open to opportunities"],
    imageAlt: "About me",
    title: "About Me",
  },
  skill: {
    title: "Skills - Strengths",
  },
  experience: {
    title: "Experience",
  },
  project: {
    title: "Projects",
    emptyCover: "Project cover (coming soon)",
    highlights: "Highlights",
  },
  touch: {
    title: "Contact Me",
    email: "Email",
    phone: "Phone",
  },
  music: {
    loading: "Loading player...",
    slowLoading: "Network is slow, still loading player...",
  },
  swiper: {
    imageAlt: "Hero carousel",
    greeting: "Hi, I am {name}. Welcome to my resume.",
    summary:
      "I am a frontend engineer with {year} years of experience, currently working at Mitatan on frontend development.",
  },
};

export default enUS;
