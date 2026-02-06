import { createI18n } from "vue-i18n";
import { localeResources, type Locale } from "./resources";

const getInitialLocale = (): Locale => {
  if (typeof window === "undefined") return "zh-CN";
  const savedLocale = window.localStorage.getItem("resume_locale");
  return savedLocale === "en-US" ? "en-US" : "zh-CN";
};

export const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: "zh-CN",
  messages: localeResources,
});
