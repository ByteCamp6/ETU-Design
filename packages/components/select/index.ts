import Select from "./src/select.vue";
import Option from "./src/option.vue";
import OptionGroup from "./src/optionGrop.vue";

import type { App } from "vue";

Select.install = (app: App) => {
  // 注册组件
  app.component(Select.name, Select);
};

Option.install = (app: App) => {
  app.component(Option.name, Option);
};

OptionGroup.install = (app: App) => {
  app.component(OptionGroup.name, OptionGroup);
};

export default { Select, Option, OptionGroup };

export * from "./src/option";
export * from "./src/select";
