"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const runtime = require("../../utils/vue/runtime.js");
const dropdownItemProps = {
  command: {
    type: runtime.definePropType([Object, String, Number]),
    default: () => "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  divided: {
    type: Boolean,
    default: false,
  },
};
exports.dropdownItemProps = dropdownItemProps;
