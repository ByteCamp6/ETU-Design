import Progress from "./src/progress.vue";

import type { App } from "vue";

Progress.install = (app: App) => {
  // 注册组件
  app.component(Progress.name, Progress);
};

export default Progress;

export * from "./src/progress";
