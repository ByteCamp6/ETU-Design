import { uploadBaseProps } from "./upload.js";
import "vue";
import { definePropType } from "../../utils/vue/runtime.js";
const uploadContentProps = {
  ...uploadBaseProps,
  beforeUpload: {
    type: definePropType(Function),
    default: () => {},
  },
  onRemove: {
    type: definePropType(Function),
    default: () => {},
  },
  onStart: {
    type: definePropType(Function),
    default: () => {},
  },
  onSuccess: {
    type: definePropType(Function),
    default: () => {},
  },
  onProgress: {
    type: definePropType(Function),
    default: () => {},
  },
  onError: {
    type: definePropType(Function),
    default: () => {},
  },
  onExceed: {
    type: definePropType(Function),
    default: () => {},
  },
};
export { uploadContentProps };
