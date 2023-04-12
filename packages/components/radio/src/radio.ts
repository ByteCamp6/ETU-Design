import { isBoolean, isNumber, isString } from "@etu-design/utils";
import type { ExtractPropTypes } from "vue";

export const radioProps = {
  /**
   * @description 单选框的大小
   */
  size: {
    type: String,
    values: ["large", "default", "small"],
    default: "default",
  },
  /**
   * @description 单选框是否被禁用
   */
  disabled: Boolean,
  /**
   * @description 单选框对应的值
   */
  label: {
    type: [String, Number, Boolean],
    default: "",
  },
  /**
   * @description 单选框对应的值
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: "",
  },
} as const;

export const radioEmits = {
  "update:modelValue": (val: string | number | boolean) =>
    isString(val) || isNumber(val) || isBoolean(val),
  change: (val: string | number | boolean) =>
    isString(val) || isNumber(val) || isBoolean(val),
};

export type RadioProps = ExtractPropTypes<typeof radioProps>;
export type RadioEmits = typeof radioEmits;
