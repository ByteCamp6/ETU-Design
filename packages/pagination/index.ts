import Pagination from "./src/pagination";
import type { App } from "vue";

Pagination.install = (app: App) => {
  // 注册组件
  app.component(Pagination.name, Pagination);
};

export default Pagination;
