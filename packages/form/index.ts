import Form from "./src/form.vue";
import FormItem from "./src/form-item.vue";
import type { App } from "vue";

Form.install = (app: App) => {
  // 注册组件
  app.component(Form.name, Form);
};
FormItem.install = (app: App) => {
  app.component(FormItem.name, FormItem);
};

export { Form, FormItem };
