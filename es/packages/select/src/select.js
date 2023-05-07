import "vue";
import {
  isString,
  isArray,
  isObject,
} from "../../../node_modules/@vue/shared/dist/shared.esm-bundler.js";
import {
  isNumber,
  isBoolean,
} from "../../../node_modules/@vueuse/shared/index.js";
const booleanType = {
  type: Boolean,
  default: false,
};
const selectProps = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
  },
  size: {
    type: String,
    values: ["large", "default", "small"],
    default: "default",
  },
  noDataText: {
    type: String,
  },
  placement: {
    type: String,
    values: [
      "top",
      "top-start",
      "top-end",
      "bottom",
      "bottom-start",
      "bottom-end",
      "left",
      "left-start",
      "left-end",
      "right",
      "right-start",
      "right-end",
    ],
    default: "bottom-start",
  },
  remoteMethod: Function,
  placeholder: {
    type: String,
  },
  remote: booleanType,
  disabled: booleanType,
  filterable: booleanType,
  clearable: booleanType,
  multiple: booleanType,
};
const selectEmits = {
  "update:modelValue": (val) =>
    isString(val) ||
    isNumber(val) ||
    isArray(val) ||
    isObject(val) ||
    isBoolean(val),
  "visible-change": (val) => isBoolean(val),
  change: (val) => isString(val),
  blur: (event) => event instanceof FocusEvent,
  focus: (event) => event instanceof FocusEvent,
};
export { selectEmits, selectProps };
