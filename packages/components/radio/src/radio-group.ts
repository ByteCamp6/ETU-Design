import { radioEmits } from "./radio";
import type { ExtractPropTypes } from "vue";

export const radioGroupProps = {
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
   * @description 绑定的值
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: "",
  },
} as const;
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;

export const radioGroupEmits = radioEmits;
export type RadioGroupEmits = typeof radioGroupEmits;
