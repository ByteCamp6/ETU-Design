"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const dropdown_vue_vue_type_script_setup_true_name_EtuDropdown_lang = require("./src/dropdown.vue.js");
const dropdownItem_vue_vue_type_script_setup_true_name_EtuDropdownItem_lang = require("./src/dropdown-item.vue.js");
const dropdownMenu_vue_vue_type_script_setup_true_name_EtuDropdownMenu_lang = require("./src/dropdown-menu.vue.js");
require("vue");
dropdown_vue_vue_type_script_setup_true_name_EtuDropdown_lang.install = (app) => {
  app.component(dropdown_vue_vue_type_script_setup_true_name_EtuDropdown_lang.name, dropdown_vue_vue_type_script_setup_true_name_EtuDropdown_lang);
};
dropdownItem_vue_vue_type_script_setup_true_name_EtuDropdownItem_lang.install = (app) => {
  app.component(dropdownItem_vue_vue_type_script_setup_true_name_EtuDropdownItem_lang.name, dropdownItem_vue_vue_type_script_setup_true_name_EtuDropdownItem_lang);
};
dropdownMenu_vue_vue_type_script_setup_true_name_EtuDropdownMenu_lang.install = (app) => {
  app.component(dropdownMenu_vue_vue_type_script_setup_true_name_EtuDropdownMenu_lang.name, dropdownMenu_vue_vue_type_script_setup_true_name_EtuDropdownMenu_lang);
};
const dropdown = { DropDown: dropdown_vue_vue_type_script_setup_true_name_EtuDropdown_lang, DropDownItem: dropdownItem_vue_vue_type_script_setup_true_name_EtuDropdownItem_lang, DropDownMenu: dropdownMenu_vue_vue_type_script_setup_true_name_EtuDropdownMenu_lang };
exports.default = dropdown;
