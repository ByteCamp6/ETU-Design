import Upload from "./src/upload.vue";
import type { App } from "vue";

Upload.install = (app: App) => {
  // 注册组件
  app.component(Upload.name, Upload);
};

export default Upload;
