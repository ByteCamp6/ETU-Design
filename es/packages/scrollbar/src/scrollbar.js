import "vue";
import { isString } from "../../../node_modules/@vue/shared/dist/shared.esm-bundler.js";
import { isNumber } from "../../../node_modules/@vueuse/shared/index.js";
const scrollbarProps = {
  height: {
    type: [Number, String],
    validator: (val) => isNumber(val) && isString(val)
  },
  maxHeight: {
    type: [Number, String],
    validator: (val) => isNumber(val) && isString(val)
  }
};
export {
  scrollbarProps
};
