import "vue";
import "../../utils/types.js";
import { isArray } from "../../../node_modules/@vue/shared/dist/shared.esm-bundler.js";
const uploadDraggerProps = {
  accept: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: false
  }
};
const uploadDraggerEmits = {
  file: (file) => isArray(file)
};
export {
  uploadDraggerEmits,
  uploadDraggerProps
};
