import Table from "./src/table.vue";
import type { App } from "vue";

Table.install = (app: App) => {
  // 注册组件
  app.component(Table.name, Table);
};

export default Table;
