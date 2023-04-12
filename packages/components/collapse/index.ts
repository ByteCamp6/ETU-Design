import Collapse from "./src/collapse.vue";
import CollapseItem from "./src/collapse-item.vue";

import type { App } from "vue";

Collapse.install = (app: App) => {
  app.component(Collapse.name, Collapse);
};

CollapseItem.install = (app: App) => {
  app.component(CollapseItem.name, CollapseItem);
};

export default {
  Collapse,
  CollapseItem,
};

export * from "./src/collapse";
export * from "./src/collapse-item";
