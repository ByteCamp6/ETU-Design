import Switch from "./src/switch.vue";
import type { App } from "vue";

Switch.install = (app: App) => {
  // 注册组件
  app.component(Switch.name, Switch);
};

export default Switch;
