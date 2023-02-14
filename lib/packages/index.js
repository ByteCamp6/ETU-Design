"use strict";
require("./link/index.js");
require("./button/index.js");
require("./divider/index.js");
const index$1 = require("./breadcrumb/index.js");
require("./icon/index.js");
require("./tag/index.js");
const index$4 = require("./select/index.js");
const index$2 = require("./checkbox/index.js");
const index$3 = require("./radio/index.js");
require("./switch/index.js");
require("./empty/index.js");
require("./upload/index.js");
require("./progress/index.js");
const index$5 = require("./collapse/index.js");
require("./drawer/index.js");
require("./overlay/index.js");
require("./avatar/index.js");
require("./dialog/index.js");
require("./input/index.js");
const index$6 = require("./scrollbar/index.js");
require("./pagination/index.js");
require("./table/index.js");
const divider_vue_vue_type_script_setup_true_lang = require("./divider/src/divider.vue.js");
const tag_vue_vue_type_script_setup_true_name_EtuTag_lang = require("./tag/src/tag.vue.js");
const empty_vue_vue_type_script_setup_true_name_EtuEmpty_lang = require("./empty/src/empty.vue.js");
const link_vue_vue_type_script_setup_true_name_EtuLink_lang = require("./link/src/link.vue.js");
const button = require("./button/src/button.vue.js");
const upload_vue_vue_type_script_setup_true_name_EtuUpload_lang = require("./upload/src/upload.vue.js");
const switch_vue_vue_type_script_setup_true_lang = require("./switch/src/switch.vue.js");
const drawer_vue_vue_type_script_setup_true_name_EtuDrawer_lang = require("./drawer/src/drawer.vue.js");
const avatar_vue_vue_type_script_setup_true_lang = require("./avatar/src/avatar.vue.js");
const dialog_vue_vue_type_script_setup_true_name_EtuDialog_lang = require("./dialog/src/dialog.vue.js");
const pagination = require("./pagination/src/pagination.js");
const table_vue_vue_type_script_setup_true_name_EtuTable_lang = require("./table/src/table.vue.js");
const icon_vue_vue_type_script_setup_true_lang = require("./icon/src/icon.vue.js");
const progress_vue_vue_type_script_setup_true_lang = require("./progress/src/progress.vue.js");
const input_vue_vue_type_script_setup_true_name_EtuInput_lang = require("./input/src/input.vue.js");
const overlay_vue_vue_type_script_setup_true_name_EtuOverlay_lang = require("./overlay/src/overlay.vue.js");
const { Breadcrumb, BreadcrumbItem } = index$1.default;
const { Checkbox, CheckboxGroup } = index$2;
const { Radio, RadioGroup } = index$3;
const { Select, Option, OptionGroup } = index$4.default;
const { Collapse, CollapseItem } = index$5.default;
const { Scrollbar } = index$6.default;
const components = [
  divider_vue_vue_type_script_setup_true_lang,
  Breadcrumb,
  BreadcrumbItem,
  icon_vue_vue_type_script_setup_true_lang,
  tag_vue_vue_type_script_setup_true_name_EtuTag_lang,
  Select,
  Option,
  OptionGroup,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  progress_vue_vue_type_script_setup_true_lang,
  empty_vue_vue_type_script_setup_true_name_EtuEmpty_lang,
  link_vue_vue_type_script_setup_true_name_EtuLink_lang,
  input_vue_vue_type_script_setup_true_name_EtuInput_lang,
  button,
  upload_vue_vue_type_script_setup_true_name_EtuUpload_lang,
  switch_vue_vue_type_script_setup_true_lang,
  Collapse,
  CollapseItem,
  drawer_vue_vue_type_script_setup_true_name_EtuDrawer_lang,
  overlay_vue_vue_type_script_setup_true_name_EtuOverlay_lang,
  avatar_vue_vue_type_script_setup_true_lang,
  dialog_vue_vue_type_script_setup_true_name_EtuDialog_lang,
  Scrollbar,
  pagination,
  table_vue_vue_type_script_setup_true_name_EtuTable_lang
];
const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
const index = {
  install
};
module.exports = index;