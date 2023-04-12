import Empty from "./src/empty.vue";
import type { App } from "vue";

Empty.install = (app: App) => {
  // 注册组件
  app.component(Empty.name, Empty);
};

export default Empty;
