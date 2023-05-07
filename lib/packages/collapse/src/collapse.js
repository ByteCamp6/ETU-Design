"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const shared_esmBundler = require("../../../node_modules/@vue/shared/dist/shared.esm-bundler.js");
const collapseProps = {
  modelValue: {
    type: [String, Array],
  },
  accordion: {
    type: Boolean,
    default: false,
  },
};
const collapseEmits = {
  change: (val) =>
    shared_esmBundler.isString(val) || shared_esmBundler.isArray(val),
};
exports.collapseEmits = collapseEmits;
exports.collapseProps = collapseProps;
