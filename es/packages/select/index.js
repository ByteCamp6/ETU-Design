import _sfc_main from "./src/select.vue.js";
import _sfc_main$1 from "./src/option.vue.js";
import _sfc_main$2 from "./src/optionGrop.vue.js";
import "vue";
import "../utils/types.js";
_sfc_main.install = (app) => {
  app.component(_sfc_main.name, _sfc_main);
};
_sfc_main$1.install = (app) => {
  app.component(_sfc_main$1.name, _sfc_main$1);
};
_sfc_main$2.install = (app) => {
  app.component(_sfc_main$2.name, _sfc_main$2);
};
const select = { Select: _sfc_main, Option: _sfc_main$1, OptionGroup: _sfc_main$2 };
export {
  select as default
};
