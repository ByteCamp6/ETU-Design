"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const overlayProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  maskEvent: {
    type: Boolean,
    default: false
  },
  zIndex: {
    type: Number
  }
};
const overlayEmits = {
  click: (evt) => evt instanceof MouseEvent
};
exports.overlayEmits = overlayEmits;
exports.overlayProps = overlayProps;
