"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const runtime = require("../../utils/vue/props/runtime.js");
require("vue");
require("../../utils/types.js");
const dialogContent = require("./dialog-content.js");
const index = require("../../../node_modules/@vueuse/shared/index.js");
const dialogProps = {
  ...dialogContent.dialogContentProps,
  appendToBody: {
    type: Boolean,
    default: false
  },
  beforeClose: {
    type: runtime.definePropType(Function)
  },
  destroyOnClose: {
    type: Boolean,
    default: false
  },
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String,
    default: "15vh"
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  modalClass: String,
  width: {
    type: [String, Number],
    default: "50%"
  },
  zIndex: {
    type: Number
  },
  trapFocus: {
    type: Boolean,
    default: false
  }
};
const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  "update:modelValue": (value) => index.isBoolean(value)
};
exports.dialogEmits = dialogEmits;
exports.dialogProps = dialogProps;
