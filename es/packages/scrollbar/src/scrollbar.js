import "vue";
import { isString } from "../../../node_modules/@vue/shared/dist/shared.esm-bundler.js";
import { isNumber } from "../../../node_modules/@vueuse/shared/index.js";
const scrollbarProps = {
  height: {
    type: [Number, String],
    validator: (val) => isNumber(val) || isString(val)
  },
  maxHeight: {
    type: [Number, String],
    validator: (val) => isNumber(val) || isString(val)
  },
  minSize: {
    type: Number,
    default: 20
  },
  native: {
    type: Boolean,
    default: true
  },
  always: {
    type: Boolean,
    default: true
  }
};
const scrollbarEmits = {
  scroll: ({
    scrollTop,
    scrollLeft
  }) => [scrollTop, scrollLeft].every(isNumber)
};
export {
  scrollbarEmits,
  scrollbarProps
};
