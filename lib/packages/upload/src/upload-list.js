"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const upload = require("./upload.js");
const uploadListProps = {
  files: {
    type: Array,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  handlePreview: {
    type: Function,
  },
  listType: {
    type: String,
    values: upload.uploadListTypes,
    default: "text",
  },
};
const uploadListEmits = {
  remove: (file) => !!file,
};
exports.uploadListEmits = uploadListEmits;
exports.uploadListProps = uploadListProps;
