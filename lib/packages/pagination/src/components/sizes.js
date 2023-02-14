"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const runtime = require("../../../utils/vue/runtime.js");
const paginationSizesProps = {
  pageSize: {
    type: Number,
    required: true
  },
  pageSizes: {
    type: runtime.definePropType(Array),
    default: () => [10, 20, 30, 40, 50, 100]
  },
  popperClass: {
    type: String
  },
  disabled: Boolean
};
exports.paginationSizesProps = paginationSizesProps;
