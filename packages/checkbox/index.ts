import Checkbox from "./src/checkbox.vue";
import CheckboxGroup from "./src/checkbox-group.vue";
import type { App } from "vue";

Checkbox.install = (app: App) => {
  // 注册组件
  app.component(Checkbox.name, Checkbox);
};

CheckboxGroup.install = (app: App) => {
  // 注册组件
  app.component(CheckboxGroup.name, CheckboxGroup);
};

export default { Checkbox, CheckboxGroup };
