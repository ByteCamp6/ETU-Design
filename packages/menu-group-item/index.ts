import menuItem from "./src/menuGroupItem.vue";
import type { App } from "vue";

menuItem.install = (app: App) => {
  // 注册组件
  app.component(menuItem.name, menuItem);
};

export default menuItem;
