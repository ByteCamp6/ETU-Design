"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const runtime = require("../../utils/vue/runtime.js");
const tableProps = {
  columns: {
    type: runtime.definePropType(Array),
    default: () => [],
    required: true
  },
  data: {
    type: runtime.definePropType(Array),
    default: () => [],
    required: true
  },
  stripe: Boolean,
  rowKey: {
    type: String,
    default: "key"
  },
  showHeader: {
    type: Boolean,
    default: true
  },
  width: [String, Number],
  height: [String, Number],
  rowSelection: {
    type: runtime.definePropType(Object)
  },
  selectedKeys: {
    type: runtime.definePropType(Array)
  },
  rowClass: {
    type: runtime.definePropType([
      String,
      Array,
      Object,
      Function
    ])
  }
};
exports.tableProps = tableProps;
