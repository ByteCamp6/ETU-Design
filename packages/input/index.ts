import Input from "./src/input.vue";
import type { App } from "vue";

Input.install = (app: App) => {
  // 注册组件
  app.component(Input.name, Input);
};
// console.log(Input);

export default Input;
