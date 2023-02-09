import { uploadBaseProps } from "./upload.js";
import { definePropType } from "../../utils/vue/props/runtime.js";
import "vue";
import "../../utils/types.js";
const uploadContentProps = {
  ...uploadBaseProps,
  beforeUpload: {
    type: definePropType(Function),
    default: () => {
    }
  },
  onRemove: {
    type: definePropType(Function),
    default: () => {
    }
  },
  onStart: {
    type: definePropType(Function),
    default: () => {
    }
  },
  onSuccess: {
    type: definePropType(
      Function
    ),
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
  uploadContentProps
};
