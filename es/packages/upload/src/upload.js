var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { ajaxUpload } from "./ajax.js";
import "vue";
import { definePropType } from "../../utils/vue/runtime.js";
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
    type: definePropType(Object)
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
    type: definePropType(Array),
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
    type: definePropType(Function),
    default: ajaxUpload
  },
  disabled: Boolean,
  limit: Number
};
const uploadProps = {
  ...uploadBaseProps,
  beforeUpload: {
    type: definePropType(Function),
    default: () => {
    }
  },
  beforeRemove: {
    type: definePropType(Function)
  },
  onRemove: {
    type: definePropType(Function),
    default: () => {
    }
  },
  onChange: {
    type: definePropType(Function),
    default: () => {
    }
  },
  onPreview: {
    type: definePropType(Function),
    default: () => {
    }
  },
  onSuccess: {
    type: definePropType(Function),
    default: () => {
    }
  },
  onProgress: {
    type: definePropType(Function),
    default: () => {
    }
  },
  onError: {
    type: definePropType(Function),
    default: () => {
    }
  },
  onExceed: {
    type: definePropType(Function),
    default: () => {
    }
  }
};
export {
  UploadAjaxError,
  uploadBaseProps,
  uploadListTypes,
  uploadProps
};
