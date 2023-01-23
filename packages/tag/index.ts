import Tag from "./src/tag.vue";
import type { App } from "vue";
console.log("????");
Tag.install = (app: App) => {
  // 注册组件
  app.component(Tag.name, Tag);
};

export default Tag;
