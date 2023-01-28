import Select from "./src/select.vue";
import Option from "./src/option.vue";

import type { App } from "vue";

Select.install = (app: App) => {
  // 注册组件
  app.component(Select.name, Select);
};

Option.install = (app: App) => {
  app.component(Option.name, Option);
};

export default { Select, Option };

export * from "./src/option";
export * from "./src/select";
