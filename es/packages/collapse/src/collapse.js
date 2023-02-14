import "vue";
import { isString, isArray } from "../../../node_modules/@vue/shared/dist/shared.esm-bundler.js";
const collapseProps = {
  modelValue: {
    type: [String, Array]
  },
  accordion: {
    type: Boolean,
    default: false
  }
};
const collapseEmits = {
  change: (val) => isString(val) || isArray(val)
};
export {
  collapseEmits,
  collapseProps
};
