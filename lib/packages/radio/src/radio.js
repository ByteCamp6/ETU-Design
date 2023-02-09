"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
require("../../utils/types.js");
const shared_esmBundler = require("../../../node_modules/@vue/shared/dist/shared.esm-bundler.js");
const index = require("../../../node_modules/@vueuse/shared/index.js");
const radioProps = {
  /**
   * @description 单选框的大小
   */
  size: {
    type: String,
    values: ["large", "default", "small"],
    default: "default"
  },
  /**
   * @description 单选框是否被禁用
   */
  disabled: Boolean,
  /**
   * @description 单选框对应的值
   */
  label: {
    type: [String, Number, Boolean],
    default: ""
  },
  /**
   * @description 单选框对应的值
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  }
};
const radioEmits = {
  "update:modelValue": (val) => shared_esmBundler.isString(val) || index.isNumber(val) || index.isBoolean(val),
  change: (val) => shared_esmBundler.isString(val) || index.isNumber(val) || index.isBoolean(val)
};
exports.radioEmits = radioEmits;
exports.radioProps = radioProps;
