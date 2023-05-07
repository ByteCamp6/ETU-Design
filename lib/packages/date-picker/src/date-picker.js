"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const shared_esmBundler = require("../../../node_modules/@vue/shared/dist/shared.esm-bundler.js");
const index = require("../../../node_modules/@vueuse/shared/index.js");
const datePickerProps = {
  modelValue: {
    type: [Date, Number, String, Array],
  },
  type: {
    type: String,
    values: [
      "year",
      "month",
      "date",
      "datetime",
      "week",
      "datetimerange",
      "daterange",
      "monthrange",
    ],
    default: "date",
  },
  placeholder: {
    type: String,
  },
  startPlaceholder: {
    type: String,
  },
  endPlaceholder: {
    type: String,
  },
  format: {
    type: String,
  },
  valueFormat: {
    type: String,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  editable: {
    type: Boolean,
    default: true,
  },
  clearable: {
    type: Boolean,
    default: true,
  },
};
const datePickerEmits = {
  "update:modelValue": (val) =>
    shared_esmBundler.isString(val) ||
    index.isNumber(val) ||
    shared_esmBundler.isArray(val) ||
    shared_esmBundler.isDate(val),
  "visible-change": (val) => index.isBoolean(val),
  change: (val) => shared_esmBundler.isString(val),
  blur: (event) => event instanceof FocusEvent,
  focus: (event) => event instanceof FocusEvent,
};
exports.datePickerEmits = datePickerEmits;
exports.datePickerProps = datePickerProps;
