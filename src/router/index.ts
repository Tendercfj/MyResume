import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Home from "../views/HomeView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/dialog",
  //   name: "Dialog",
  //   component: () => import("../views/DialogTest.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory("/MyResume/"),
  routes,
});

export default router;

