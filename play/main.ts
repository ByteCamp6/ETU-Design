import { createApp } from "vue";
import App from "./app.vue";
import "@etu-design/theme-chalk/src/index.scss";

// import Etu from "@etu-design/components";
import { Icon } from "@etu-design/components/icon";

const app = createApp(App);
app.use(Icon as any);
app.mount("#app");
