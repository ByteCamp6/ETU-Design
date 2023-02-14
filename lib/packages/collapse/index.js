"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const collapse_vue_vue_type_script_setup_true_lang = require("./src/collapse.vue.js");
const collapseItem_vue_vue_type_script_setup_true_lang = require("./src/collapse-item.vue.js");
require("vue");
collapse_vue_vue_type_script_setup_true_lang.install = (app) => {
  app.component(collapse_vue_vue_type_script_setup_true_lang.name, collapse_vue_vue_type_script_setup_true_lang);
};
collapseItem_vue_vue_type_script_setup_true_lang.install = (app) => {
  app.component(collapseItem_vue_vue_type_script_setup_true_lang.name, collapseItem_vue_vue_type_script_setup_true_lang);
};
const collapse = {
  Collapse: collapse_vue_vue_type_script_setup_true_lang,
  CollapseItem: collapseItem_vue_vue_type_script_setup_true_lang
};
exports.default = collapse;
