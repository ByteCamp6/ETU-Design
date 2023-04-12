import Row from "./src/row.vue";
import type { App } from "vue";

Row.install = (app: App) => {
  // 注册组件
  app.component(Row.name, Row);
};

export default Row;
