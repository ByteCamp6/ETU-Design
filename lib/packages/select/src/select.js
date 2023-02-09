"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
require("../../utils/types.js");
const shared_esmBundler = require("../../../node_modules/@vue/shared/dist/shared.esm-bundler.js");
const index = require("../../../node_modules/@vueuse/shared/index.js");
const booleanType = {
  type: Boolean,
  default: false
};
const selectProps = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array]
  },
  size: {
    type: String,
    values: ["large", "default", "small"],
    default: "default"
  },
  noDataText: {
    type: String
  },
  placement: {
    type: String,
    values: [
      "top",
      "top-start",
      "top-end",
      "bottom",
      "bottom-start",
      "bottom-end",
      "left",
      "left-start",
      "left-end",
      "right",
      "right-start",
      "right-end"
    ],
    default: "bottom-start"
  },
  remoteMethod: Function,
  placeholder: {
    type: String
  },
  disabled: booleanType,
  filterable: booleanType,
  clearable: booleanType,
  multiple: booleanType
};
const selectEmits = {
  "update:modelValue": (val) => shared_esmBundler.isString(val) || index.isNumber(val) || shared_esmBundler.isArray(val) || shared_esmBundler.isObject(val) || index.isBoolean(val),
  "visible-change": (val) => index.isBoolean(val),
  change: (val) => shared_esmBundler.isString(val),
  blur: (event) => event instanceof FocusEvent,
  focus: (event) => event instanceof FocusEvent
};
exports.selectEmits = selectEmits;
exports.selectProps = selectProps;
