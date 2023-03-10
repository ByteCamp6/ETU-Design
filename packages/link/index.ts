import Link from "./src/link.vue";
export * from "./src/link";
import type { App } from "vue";

Link.install = (app: App) => {
  // 注册组件
  app.component(Link.name, Link);
};

export default Link;
