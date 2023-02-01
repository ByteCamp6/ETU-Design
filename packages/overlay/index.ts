import Overlay from "./src/overlay.vue";
import type { App } from "vue";

Overlay.install = (app: App) => {
  // 注册组件
  app.component(Overlay.name, Overlay);
};

export default Overlay;
