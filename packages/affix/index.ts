import Affix from "./src/affix.vue";
import type { App } from "vue";

Affix.install = (app: App) => {
  // 注册组件
  app.component(Affix.name, Affix);
};

export default Affix;
