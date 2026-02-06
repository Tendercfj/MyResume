import { createApp } from "vue";
import "./style.css";
import "virtual:svg-icons-register";
// import "animate.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import Vue3Lottie from 'vue3-lottie'
import { lazyLoad } from "./directives/lazyLoad";
import { i18n } from "./i18n";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(Vue3Lottie)
app.directive("lazy-load", lazyLoad);
app.mount("#app");
