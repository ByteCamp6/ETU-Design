import _sfc_main from "./src/dropdown.vue.js";
import _sfc_main$1 from "./src/dropdown-item.vue.js";
import _sfc_main$2 from "./src/dropdown-menu.vue.js";
import "vue";
_sfc_main.install = (app) => {
  app.component(_sfc_main.name, _sfc_main);
};
_sfc_main$1.install = (app) => {
  app.component(_sfc_main$1.name, _sfc_main$1);
};
_sfc_main$2.install = (app) => {
  app.component(_sfc_main$2.name, _sfc_main$2);
};
const dropdown = {
  DropDown: _sfc_main,
  DropDownItem: _sfc_main$1,
  DropDownMenu: _sfc_main$2,
};
export { dropdown as default };
