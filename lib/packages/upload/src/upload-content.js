"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const upload = require("./upload.js");
require("vue");
const runtime = require("../../utils/vue/runtime.js");
const uploadContentProps = {
  ...upload.uploadBaseProps,
  beforeUpload: {
    type: runtime.definePropType(Function),
    default: () => {},
  },
  onRemove: {
    type: runtime.definePropType(Function),
    default: () => {},
  },
  onStart: {
    type: runtime.definePropType(Function),
    default: () => {},
  },
  onSuccess: {
    type: runtime.definePropType(Function),
    default: () => {},
  },
  onProgress: {
    type: runtime.definePropType(Function),
    default: () => {},
  },
  onError: {
    type: runtime.definePropType(Function),
    default: () => {},
  },
  onExceed: {
    type: runtime.definePropType(Function),
    default: () => {},
  },
};
exports.uploadContentProps = uploadContentProps;
