import Scrollbar from "./src/scrollbar.vue";
import type { App } from "vue";

Scrollbar.install = (app: App) => {
  app.component(Scrollbar.name, Scrollbar);
};

export default { Scrollbar };
export * from "./src/scrollbar";
