"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const dialogContentProps = {
  center: {
    type: Boolean,
    default: false,
  },
  alignCenter: {
    type: Boolean,
    default: false,
  },
  closeIcon: {
    type: String,
  },
  customClass: {
    type: String,
    default: "",
  },
  draggable: {
    type: Boolean,
    default: false,
  },
  showClose: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: "",
  },
};
const dialogContentEmits = {
  close: () => true,
};
exports.dialogContentEmits = dialogContentEmits;
exports.dialogContentProps = dialogContentProps;
