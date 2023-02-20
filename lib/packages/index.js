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
require("./row/index.js");
require("./col/index.js");
require("./table/index.js");
require("./date-picker/index.js");
require("./popper/index.js");
require("./tree/index.js");
require("./form/index.js");
const index$7 = require("./dropdown/index.js");
require("./pagination/index.js");
require("./menu-group/index.js");
require("./menu-group-item/index.js");
const divider_vue_vue_type_script_setup_true_lang = require("./divider/src/divider.vue.js");
const tag_vue_vue_type_script_setup_true_name_EtuTag_lang = require("./tag/src/tag.vue.js");
const empty_vue_vue_type_script_setup_true_name_EtuEmpty_lang = require("./empty/src/empty.vue.js");
const link_vue_vue_type_script_setup_true_name_EtuLink_lang = require("./link/src/link.vue.js");
const button_vue_vue_type_script_setup_true_name_EtuButton_lang = require("./button/src/button.vue.js");
const upload_vue_vue_type_script_setup_true_name_EtuUpload_lang = require("./upload/src/upload.vue.js");
const switch_vue_vue_type_script_setup_true_name_EtuSwitch_lang = require("./switch/src/switch.vue.js");
const drawer_vue_vue_type_script_setup_true_name_EtuDrawer_lang = require("./drawer/src/drawer.vue.js");
const avatar_vue_vue_type_script_setup_true_lang = require("./avatar/src/avatar.vue.js");
const dialog_vue_vue_type_script_setup_true_name_EtuDialog_lang = require("./dialog/src/dialog.vue.js");
const row_vue_vue_type_script_setup_true_lang = require("./row/src/row.vue.js");
const col_vue_vue_type_script_setup_true_lang = require("./col/src/col.vue.js");
const pagination = require("./pagination/src/pagination.js");
const table_vue_vue_type_script_setup_true_name_EtuTable_lang = require("./table/src/table.vue.js");
const datePicker_vue_vue_type_script_setup_true_lang = require("./date-picker/src/date-picker.vue.js");
const tree_vue_vue_type_script_setup_true_lang = require("./tree/src/tree.vue.js");
const form_vue_vue_type_script_setup_true_lang = require("./form/src/form.vue.js");
const formItem_vue_vue_type_script_setup_true_lang = require("./form/src/form-item.vue.js");
const menuGroup_vue_vue_type_script_setup_true_name_EtuMenuGroup_lang = require("./menu-group/src/menuGroup.vue.js");
const menuGroupItem_vue_vue_type_script_setup_true_name_EtuMenuItem_lang = require("./menu-group-item/src/menuGroupItem.vue.js");
const icon_vue_vue_type_script_setup_true_lang = require("./icon/src/icon.vue.js");
const progress_vue_vue_type_script_setup_true_lang = require("./progress/src/progress.vue.js");
const input_vue_vue_type_script_setup_true_name_EtuInput_lang = require("./input/src/input.vue.js");
const overlay_vue_vue_type_script_setup_true_name_EtuOverlay_lang = require("./overlay/src/overlay.vue.js");
const popper_vue_vue_type_script_setup_true_name_EtuPopper_lang = require("./popper/src/popper.vue.js");
const { Breadcrumb, BreadcrumbItem } = index$1.default;
const { Checkbox, CheckboxGroup } = index$2;
const { Radio, RadioGroup } = index$3;
const { Select, Option, OptionGroup } = index$4.default;
const { Collapse, CollapseItem } = index$5.default;
const { Scrollbar } = index$6.default;
const { DropDown, DropDownItem, DropDownMenu } = index$7.default;
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
  button_vue_vue_type_script_setup_true_name_EtuButton_lang,
  upload_vue_vue_type_script_setup_true_name_EtuUpload_lang,
  switch_vue_vue_type_script_setup_true_name_EtuSwitch_lang,
  Collapse,
  CollapseItem,
  drawer_vue_vue_type_script_setup_true_name_EtuDrawer_lang,
  overlay_vue_vue_type_script_setup_true_name_EtuOverlay_lang,
  avatar_vue_vue_type_script_setup_true_lang,
  dialog_vue_vue_type_script_setup_true_name_EtuDialog_lang,
  Scrollbar,
  row_vue_vue_type_script_setup_true_lang,
  col_vue_vue_type_script_setup_true_lang,
  pagination,
  table_vue_vue_type_script_setup_true_name_EtuTable_lang,
  datePicker_vue_vue_type_script_setup_true_lang,
  popper_vue_vue_type_script_setup_true_name_EtuPopper_lang,
  tree_vue_vue_type_script_setup_true_lang,
  form_vue_vue_type_script_setup_true_lang,
  formItem_vue_vue_type_script_setup_true_lang,
  DropDown,
  DropDownItem,
  DropDownMenu,
  pagination,
  menuGroup_vue_vue_type_script_setup_true_name_EtuMenuGroup_lang,
  menuGroupItem_vue_vue_type_script_setup_true_name_EtuMenuItem_lang
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
