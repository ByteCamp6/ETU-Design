import Popper from "./src/popper.vue";
import type { App } from "vue";

Popper.install = (app: App) => {
  // 注册组件
  app.component(Popper.name, Popper);
};

export default Popper;
