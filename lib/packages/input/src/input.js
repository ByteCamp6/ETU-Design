"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const runtime = require("../../utils/vue/runtime.js");
const shared_esmBundler = require("../../../node_modules/@vue/shared/dist/shared.esm-bundler.js");
const inputProps = {
  placeholder: {
    type: String,
    default: ""
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  // readonly: Boolean,
  autocomplete: {
    type: String,
    default: "off"
  },
  modelValue: {
    type: runtime.definePropType([String, Number]),
    default: ""
  },
  clearable: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    values: ["text", "textarea"],
    default: "text"
  },
  size: {
    type: String,
    values: ["small", "medium", "large"],
    default: "medium"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  prefixIcon: {
    type: String,
    default: ""
  },
  suffixIcon: {
    type: String,
    default: ""
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  readonly: {
    type: Boolean
  }
};
const inputEmits = {
  "update:modelValue": (value) => shared_esmBundler.isString(value),
  input: (value) => shared_esmBundler.isString(value),
  change: (value) => shared_esmBundler.isString(value),
  clear: () => true,
  mouseleave: (evt) => evt instanceof MouseEvent,
  mouseenter: (evt) => evt instanceof MouseEvent
};
exports.inputEmits = inputEmits;
exports.inputProps = inputProps;
