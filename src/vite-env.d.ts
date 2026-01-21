/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "virtual:svg-icons-register" {
  const register: unknown;
  export default register;
}

declare module "typed.js";

declare module "*.mp3" {
  const src: string;
  export default src;
}
