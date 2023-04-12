import Dialog from "./src/dialog.vue";
import type { App } from "vue";

Dialog.install = (app: App) => {
  // 注册组件
  app.component(Dialog.name, Dialog);
};

export default Dialog;
