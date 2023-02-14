"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const ajax = require("./ajax.js");
require("vue");
const runtime = require("../../utils/vue/runtime.js");
const uploadListTypes = ["text", "picture", "picture-card"];
class UploadAjaxError extends Error {
  constructor(message, status, method, url) {
    super(message);
    __publicField(this, "name", "UploadAjaxError");
    __publicField(this, "status");
    __publicField(this, "method");
    __publicField(this, "url");
    this.status = status;
    this.method = method;
    this.url = url;
  }
}
const uploadBaseProps = {
  action: {
    type: String,
    default: "#"
  },
  headers: {
    type: runtime.definePropType(Object)
  },
  method: {
    type: String,
    default: "post"
  },
  data: {
    type: Object,
    default: () => {
    }
  },
  multiple: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    default: "file"
  },
  drag: {
    type: Boolean,
    default: false
  },
  withCredentials: Boolean,
  showFileList: {
    type: Boolean,
    default: true
  },
  accept: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "select"
  },
  fileList: {
    type: runtime.definePropType(Array),
    default: () => []
  },
  autoUpload: {
    type: Boolean,
    default: true
  },
  listType: {
    type: String,
    values: uploadListTypes,
    default: "text"
  },
  httpRequest: {
    type: runtime.definePropType(Function),
    default: ajax.ajaxUpload
  },
  disabled: Boolean,
  limit: Number
};
const uploadProps = {
  ...uploadBaseProps,
  beforeUpload: {
    type: runtime.definePropType(Function),
    default: () => {
    }
  },
  beforeRemove: {
    type: runtime.definePropType(Function)
  },
  onRemove: {
    type: runtime.definePropType(Function),
    default: () => {
    }
  },
  onChange: {
    type: runtime.definePropType(Function),
    default: () => {
    }
  },
  onPreview: {
    type: runtime.definePropType(Function),
    default: () => {
    }
  },
  onSuccess: {
    type: runtime.definePropType(Function),
    default: () => {
    }
  },
  onProgress: {
    type: runtime.definePropType(Function),
    default: () => {
    }
  },
  onError: {
    type: runtime.definePropType(Function),
    default: () => {
    }
  },
  onExceed: {
    type: runtime.definePropType(Function),
    default: () => {
    }
  }
};
exports.UploadAjaxError = UploadAjaxError;
exports.uploadBaseProps = uploadBaseProps;
exports.uploadListTypes = uploadListTypes;
exports.uploadProps = uploadProps;
