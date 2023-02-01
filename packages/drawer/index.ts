import Drawer from "./src/drawer.vue";
import type { App } from "vue";

Drawer.install = (app: App) => {
  // 注册组件
  app.component(Drawer.name, Drawer);
};

export default Drawer;
