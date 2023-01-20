import Divider from "./src/divider.vue";
import type { App } from "vue";

Divider.install = (app: App) => {
  // 注册组件
  app.component(Divider.name, Divider);
};

export default Divider;
