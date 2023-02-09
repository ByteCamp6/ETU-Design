"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
require("../../utils/types.js");
const shared_esmBundler = require("../../../node_modules/@vue/shared/dist/shared.esm-bundler.js");
const uploadDraggerProps = {
  accept: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: false
  }
};
const uploadDraggerEmits = {
  file: (file) => shared_esmBundler.isArray(file)
};
exports.uploadDraggerEmits = uploadDraggerEmits;
exports.uploadDraggerProps = uploadDraggerProps;
