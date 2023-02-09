"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const progressProps = {
  percentage: {
    type: Number,
    default: 0,
    validator: (val) => val >= 0 && val <= 100
  },
  type: {
    type: String,
    default: "line",
    values: ["line", "circle", "dashboard"]
  },
  status: {
    type: String,
    default: "",
    values: ["", "success", "exception", "warning"]
  },
  textInside: {
    type: Boolean,
    default: false
  },
  indeterminate: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 3
  },
  strokeWidth: {
    type: Number,
    default: 6
  },
  width: {
    type: Number,
    default: 126
  },
  showText: {
    type: Boolean,
    default: true
  }
};
exports.progressProps = progressProps;
