"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const runtime = require("../../utils/vue/props/runtime.js");
require("vue");
require("../../utils/types.js");
const roleTypes = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
];
const popperProps = runtime.buildProps({
  role: {
    type: String,
    values: roleTypes,
    default: "tooltip"
  }
});
exports.popperProps = popperProps;
exports.roleTypes = roleTypes;
