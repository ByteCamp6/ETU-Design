// 整合所有组件
import Button from "./button";
import type { App } from "vue";
// 全部引入
const components = [Button];

// 全局动态添加
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
// 全局注册
export default {
  install,
};
