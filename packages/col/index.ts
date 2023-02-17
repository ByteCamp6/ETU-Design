import Col from "./src/col.vue";
import type { App } from "vue";

Col.install = (app: App) => {
  // 注册组件
  app.component(Col.name, Col);
};

export default Col;
