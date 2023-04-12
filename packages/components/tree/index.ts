import Tree from "./src/tree.vue";
import type { App } from "vue";

Tree.install = (app: App) => {
  // 注册组件
  app.component(Tree.name, Tree);
};

export default Tree;
