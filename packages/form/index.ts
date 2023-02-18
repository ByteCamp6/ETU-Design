import Form from "./src/form.vue";
import type { App } from "vue";

Form.install = (app: App) => {
  // 注册组件
  app.component(Form.name, Form);
};

export default Form;
