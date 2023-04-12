import Radio from "./src/radio.vue";
import RadioGroup from "./src/radio-group.vue";
import type { App } from "vue";

Radio.install = (app: App) => {
  // 注册组件
  app.component(Radio.name, Radio);
};

RadioGroup.install = (app: App) => {
  // 注册组件
  app.component(RadioGroup.name, RadioGroup);
};

export default { Radio, RadioGroup };
