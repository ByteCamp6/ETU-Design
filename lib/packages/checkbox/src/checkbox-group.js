"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const shared_esmBundler = require("../../../node_modules/@vue/shared/dist/shared.esm-bundler.js");
const checkboxGroupProps = {
  /**
   * @description 绑定值
   */
  modelValue: {
    type: Array,
    default: () => []
  },
  /**
   * @description whether the nesting checkboxes are disabled
   */
  disabled: Boolean,
  /**
   * @description 选中复选框的最小数量
   */
  min: Number,
  /**
   * @description 选中复选框的最大数量
   */
  max: Number,
  size: {
    type: String,
    values: ["large", "default", "small"],
    default: "default"
  }
};
const checkboxGroupEmits = {
  "update:modelValue": (val) => shared_esmBundler.isArray(val),
  change: (val) => shared_esmBundler.isArray(val)
};
exports.checkboxGroupEmits = checkboxGroupEmits;
exports.checkboxGroupProps = checkboxGroupProps;
