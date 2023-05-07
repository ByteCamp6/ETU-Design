"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const radio = require("./radio.js");
const radioGroupProps = {
  /**
   * @description 单选框的大小
   */
  size: {
    type: String,
    values: ["large", "default", "small"],
    default: "default",
  },
  /**
   * @description 单选框是否被禁用
   */
  disabled: Boolean,
  /**
   * @description 绑定的值
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: "",
  },
};
const radioGroupEmits = radio.radioEmits;
exports.radioGroupEmits = radioGroupEmits;
exports.radioGroupProps = radioGroupProps;
