"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const shared_esmBundler = require("../../../node_modules/@vue/shared/dist/shared.esm-bundler.js");
const index = require("../../../node_modules/@vueuse/shared/index.js");
const scrollbarProps = {
  height: {
    type: [Number, String],
    validator: (val) => index.isNumber(val) && shared_esmBundler.isString(val)
  },
  maxHeight: {
    type: [Number, String],
    validator: (val) => index.isNumber(val) && shared_esmBundler.isString(val)
  }
};
exports.scrollbarProps = scrollbarProps;
