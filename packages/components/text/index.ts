import Text from "./src/text.vue";
import type { App } from "vue";

Text.install = (app: App) => {
  // 注册组件
  app.component(Text.name, Text);
};

export default Text;
