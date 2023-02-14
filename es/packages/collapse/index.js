import _sfc_main from "./src/collapse.vue.js";
import _sfc_main$1 from "./src/collapse-item.vue.js";
import "vue";
_sfc_main.install = (app) => {
  app.component(_sfc_main.name, _sfc_main);
};
_sfc_main$1.install = (app) => {
  app.component(_sfc_main$1.name, _sfc_main$1);
};
const collapse = {
  Collapse: _sfc_main,
  CollapseItem: _sfc_main$1
};
export {
  collapse as default
};
