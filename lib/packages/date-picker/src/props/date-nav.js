"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const shared = require("./shared.js");
const dateNavProps = {
  left: {
    type: Boolean,
    default: true
  },
  right: {
    type: Boolean,
    default: true
  },
  change: {
    type: Boolean,
    default: true
  },
  ...shared.sharedProps
};
exports.dateNavProps = dateNavProps;
