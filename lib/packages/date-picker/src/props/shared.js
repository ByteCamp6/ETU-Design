"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const dayjs_min = require("../../../../node_modules/dayjs/dayjs.min.js");
const sharedProps = {
  value: {
    type: dayjs_min.Dayjs
  },
  model: {
    type: dayjs_min.Dayjs
  },
  index: {
    type: Number,
    default: -1
  }
};
exports.sharedProps = sharedProps;
