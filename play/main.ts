import { createApp } from "vue";
import App from "./app.vue";
import Etu from "@etu-design/components";
// import "./assets/main.css";

const app = createApp(App);
app.use(Etu);
app.mount("#app");
