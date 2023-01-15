import Divider from "./lib/divider.vue";
import type { App } from "vue";

Divider.install = (app: App) => {
  // 注册组件
  app.component(Divider.name, Divider);
};

export default Divider;
