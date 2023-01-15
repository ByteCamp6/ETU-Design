import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";
import "../packages/theme-chalk/src/index.scss";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      name: "Home",
      meta: {
        title: "首页",
        keepAlive: true,
        requireAuth: true,
      },
      component: () => import("@/components/Breadcrumb.vue"),
    },
  ],
});

import ETU from "../packages/index";
// import "./assets/main.css";

const app = createApp(App);
app.use(ETU);
app.use(router);
app.mount("#app");
