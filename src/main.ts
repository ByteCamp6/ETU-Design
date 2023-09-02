import { createApp } from "vue";
import App from "./App.vue";
import "../packages/theme-chalk/src/index.scss";

import Etu from "@etu-design/components";

const app = createApp(App);
app.use(Etu);
app.mount("#app");
