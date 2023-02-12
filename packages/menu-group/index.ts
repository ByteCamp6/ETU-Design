import menuGroup from "./src/menuGroup.vue";
import type { App } from "vue";

menuGroup.install = (app: App) => {
  // 注册组件
  app.component(menuGroup.name, menuGroup);
};

export default menuGroup;
