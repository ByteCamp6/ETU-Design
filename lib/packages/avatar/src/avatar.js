"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const runtime = require("../../utils/vue/runtime.js");
const index = require("../../../node_modules/@vueuse/shared/index.js");
const componentSizes = ["", "default", "small", "large"];
const shapeTypes = ["circle", "square"];
const avatarProps = {
  icon: {
    type: String,
  },
  size: {
    type: [Number, String],
    values: componentSizes,
    default: "",
    validator: (val) => index.isNumber(val),
  },
  shape: {
    type: String,
    values: shapeTypes,
    default: "circle",
  },
  src: {
    type: String,
  },
  srcSet: {
    type: String,
  },
  alt: {
    type: String,
  },
  fit: {
    type: runtime.definePropType(String),
    default: "cover",
  },
};
const avatarEmits = {
  error: (evt) => evt instanceof Event,
};
exports.avatarEmits = avatarEmits;
exports.avatarProps = avatarProps;
