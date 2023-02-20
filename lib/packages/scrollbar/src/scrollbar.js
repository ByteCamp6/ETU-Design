"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const shared_esmBundler = require("../../../node_modules/@vue/shared/dist/shared.esm-bundler.js");
const index = require("../../../node_modules/@vueuse/shared/index.js");
const scrollbarProps = {
  height: {
    type: [Number, String],
    validator: (val) => index.isNumber(val) || shared_esmBundler.isString(val)
  },
  maxHeight: {
    type: [Number, String],
    validator: (val) => index.isNumber(val) || shared_esmBundler.isString(val)
  },
  minSize: {
    type: Number,
    default: 20
  },
  native: {
    type: Boolean,
    default: true
  },
  always: {
    type: Boolean,
    default: true
  }
};
const scrollbarEmits = {
  scroll: ({
    scrollTop,
    scrollLeft
  }) => [scrollTop, scrollLeft].every(index.isNumber)
};
exports.scrollbarEmits = scrollbarEmits;
exports.scrollbarProps = scrollbarProps;
