"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const form_vue_vue_type_script_setup_true_lang = require("./src/form.vue.js");
const formItem_vue_vue_type_script_setup_true_lang = require("./src/form-item.vue.js");
form_vue_vue_type_script_setup_true_lang.install = (app) => {
  app.component(
    form_vue_vue_type_script_setup_true_lang.name,
    form_vue_vue_type_script_setup_true_lang,
  );
};
formItem_vue_vue_type_script_setup_true_lang.install = (app) => {
  app.component(
    formItem_vue_vue_type_script_setup_true_lang.name,
    formItem_vue_vue_type_script_setup_true_lang,
  );
};
exports.Form = form_vue_vue_type_script_setup_true_lang;
exports.FormItem = formItem_vue_vue_type_script_setup_true_lang;
