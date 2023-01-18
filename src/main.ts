import { createApp } from "vue";
import App from "./App.vue";
import "../packages/theme-chalk/src/index.scss";

import ETU from "../packages/index";
console.log(ETU, "ETu");
import "./assets/main.css";

createApp(App).use(ETU).mount("#app");
