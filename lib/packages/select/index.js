"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const select_vue_vue_type_script_setup_true_lang = require("./src/select.vue.js");
const option_vue_vue_type_script_setup_true_lang = require("./src/option.vue.js");
const optionGrop_vue_vue_type_script_setup_true_lang = require("./src/optionGrop.vue.js");
require("vue");
select_vue_vue_type_script_setup_true_lang.install = (app) => {
  app.component(select_vue_vue_type_script_setup_true_lang.name, select_vue_vue_type_script_setup_true_lang);
};
option_vue_vue_type_script_setup_true_lang.install = (app) => {
  app.component(option_vue_vue_type_script_setup_true_lang.name, option_vue_vue_type_script_setup_true_lang);
};
optionGrop_vue_vue_type_script_setup_true_lang.install = (app) => {
  app.component(optionGrop_vue_vue_type_script_setup_true_lang.name, optionGrop_vue_vue_type_script_setup_true_lang);
};
const select = { Select: select_vue_vue_type_script_setup_true_lang, Option: option_vue_vue_type_script_setup_true_lang, OptionGroup: optionGrop_vue_vue_type_script_setup_true_lang };
exports.default = select;
