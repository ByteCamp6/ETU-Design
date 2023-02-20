"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const runtime = require("../../utils/vue/runtime.js");
const dropDownProps = {
  maxHeight: { type: runtime.definePropType([Number, String]) },
  canclePadding: {
    type: Boolean,
    default: true
  },
  splitButton: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger", "default"],
    default: "primary"
  },
  size: {
    type: String,
    values: ["large", "default", "small"],
    default: "default"
  },
  placement: {
    type: String,
    default: "bottom",
    validator: (value) => {
      return [
        "auto",
        "auto-start",
        "auto-end",
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "right",
        "right-start",
        "right-end",
        "left",
        "left-start",
        "left-end"
      ].indexOf(value) !== -1;
    }
  },
  trigger: {
    type: String,
    default: "hover"
  },
  arrowDown: {
    type: Boolean,
    default: true
  }
};
const dropdownEmits = {
  command: (env, command) => true,
  click: (env) => env instanceof MouseEvent
};
exports.dropDownProps = dropDownProps;
exports.dropdownEmits = dropdownEmits;
