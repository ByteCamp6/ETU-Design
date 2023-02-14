import { isString, isNumber, isArray, isBoolean, isObject } from "../../utils/";
import type { ExtractPropTypes } from "vue";
import type Select from "./select.vue";

const booleanType = {
  type: Boolean,
  default: false,
};

export const selectProps = {
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
  disabled: booleanType,
  filterable: booleanType,
  clearable: booleanType,
  multiple: booleanType,
} as const;

export const selectEmits = {
  "update:modelValue": (val: string | number | Array<any> | boolean | object) =>
    isString(val) ||
    isNumber(val) ||
    isArray(val) ||
    isObject(val) ||
    isBoolean(val),
  "visible-change": (val: boolean) => isBoolean(val),
  change: (val: string) => isString(val),
  blur: (event: FocusEvent) => event instanceof FocusEvent,
  focus: (event: FocusEvent) => event instanceof FocusEvent,
};

export type SelectProps = ExtractPropTypes<typeof selectProps>;
export type SelectInstance = InstanceType<typeof Select>;
