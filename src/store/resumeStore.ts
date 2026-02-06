import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { i18n } from "@/i18n";
import type { Locale } from "@/i18n/resources";

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
  const locale = computed<Locale>({
    get: () => i18n.global.locale.value as Locale,
    set: (value) => {
      i18n.global.locale.value = value;
    },
  });
  const imgs: SwiperImage[] = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
  ];
  const getText = (key: string, params?: Record<string, unknown>) =>
    i18n.global.t(key, params) as string;
  const uiText = computed(() => {
    void locale.value;
    return {
      profile: {
        year: getText("profile.year"),
      },
      nav: {
        items: [
          getText("nav.items.0"),
          getText("nav.items.1"),
          getText("nav.items.2"),
          getText("nav.items.3"),
          getText("nav.items.4"),
          getText("nav.items.5"),
        ],
        drawerTitle: getText("nav.drawerTitle"),
        version: getText("nav.version"),
      },
      about: {
        cards: [
          getText("about.cards.0"),
          getText("about.cards.1"),
          getText("about.cards.2"),
          getText("about.cards.3"),
        ],
        imageAlt: getText("about.imageAlt"),
        title: getText("about.title"),
      },
      skill: {
        title: getText("skill.title"),
      },
      experience: {
        title: getText("experience.title"),
      },
      project: {
        title: getText("project.title"),
        emptyCover: getText("project.emptyCover"),
        highlights: getText("project.highlights"),
      },
      touch: {
        title: getText("touch.title"),
        email: getText("touch.email"),
        phone: getText("touch.phone"),
      },
      music: {
        loading: getText("music.loading"),
        slowLoading: getText("music.slowLoading"),
      },
      swiper: {
        imageAlt: getText("swiper.imageAlt"),
        greeting: (name: string) => getText("swiper.greeting", { name }),
        summary: (year: string) => getText("swiper.summary", { year }),
      },
    };
  });
  const name = "Tender";
  const year = computed(() => uiText.value.profile.year);
  const navList = computed<NavItem[]>(() => [
    { text: uiText.value.nav.items[0], id: "#home" },
    { text: uiText.value.nav.items[1], id: "aboutme" },
    { text: uiText.value.nav.items[2], id: "skill" },
    { text: uiText.value.nav.items[3], id: "experience" },
    { text: uiText.value.nav.items[4], id: "project" },
    { text: uiText.value.nav.items[5], id: "touch" },
  ]);
  const aboutMeList = computed<AboutMeItem[]>(() => [
    {
      src: svg1,
      title: uiText.value.about.cards[0],
    },
    {
      src: svg2,
      title: uiText.value.about.cards[1],
    },
    {
      src: svg3,
      title: uiText.value.about.cards[2],
    },
    {
      src: svg4,
      title: uiText.value.about.cards[3],
    },
  ]);
  const doubleCount = computed(() => count.value * 2);
  const setLocale = (value: Locale) => {
    locale.value = value;
  };
  const toggleLocale = () => {
    locale.value = locale.value === "zh-CN" ? "en-US" : "zh-CN";
  };

  function increment() {
    count.value++;
  }

  if (typeof window !== "undefined") {
    watch(
      () => locale.value,
      (value) => {
        window.localStorage.setItem("resume_locale", value);
        document.documentElement.lang = value === "en-US" ? "en" : "zh-CN";
      },
      { immediate: true },
    );
  }

  return {
    count,
    doubleCount,
    increment,
    imgs,
    name,
    year,
    locale,
    uiText,
    setLocale,
    toggleLocale,
    navList,
    aboutMeList,
  };
});
