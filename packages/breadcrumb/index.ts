import Breadcrumb from "./src/breadcrumb.vue";
import BreadcrumbItem from "./src/breadcrumb-item.vue";
import type { App } from "vue";

Breadcrumb.install = (app: App) => {
  // 注册组件
  app.component(Breadcrumb.name, Breadcrumb);
};

BreadcrumbItem.install = (app: App) => {
  // 注册组件
  app.component(BreadcrumbItem.name, BreadcrumbItem);
};

export default { Breadcrumb, BreadcrumbItem };

export * from "./src/breadcrumb";
export * from "./src/breadcrumb-item";
