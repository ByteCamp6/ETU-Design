import "vue";
import { definePropType } from "../../utils/vue/runtime.js";
import { isString } from "../../../node_modules/@vue/shared/dist/shared.esm-bundler.js";
const inputProps = {
  placeholder: {
    type: String,
    default: ""
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  // readonly: Boolean,
  autocomplete: {
    type: String,
    default: "off"
  },
  modelValue: {
    type: definePropType([String, Number]),
    default: ""
  },
  clearable: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    values: ["text", "textarea"],
    default: "text"
  },
  size: {
    type: String,
    values: ["small", "medium", "large"],
    default: "medium"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  prefixIcon: {
    type: String,
    default: ""
  },
  suffixIcon: {
    type: String,
    default: ""
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  readonly: {
    type: Boolean
  }
};
const inputEmits = {
  "update:modelValue": (value) => isString(value),
  input: (value) => isString(value),
  change: (value) => isString(value),
  clear: () => true,
  mouseleave: (evt) => evt instanceof MouseEvent,
  mouseenter: (evt) => evt instanceof MouseEvent
};
export {
  inputEmits,
  inputProps
};
