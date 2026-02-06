import zhCN from "./locales/zh-CN";
import enUS from "./locales/en-US";

export const localeResources = {
  "zh-CN": zhCN,
  "en-US": enUS,
} as const;

export type Locale = keyof typeof localeResources;
