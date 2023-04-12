import { isBoolean, isString, isNumber } from "@etu-design/utils";
import type { ExtractPropTypes } from "vue";

export type CheckboxValueType = string | number | boolean;

export const checkboxProps = {
  /**
   * @description 绑定的值
   */
  modelValue: {
    type: [Number, String, Boolean],
    default: undefined,
  },
  /**
   * @description 在复选框组中使用时复选框的值`
   */
  label: {
    type: [String, Boolean, Number],
  },
  /**
   * @description 设置中间状态，仅负责样式控制
   */
  indeterminate: Boolean,
  /**
   * @description 是否禁用复选框
   */
  disabled: Boolean,
  /**
   * @description 是否选中复选框（只在非受控状态下有效）
   */
  checked: Boolean,
};

export const checkboxEmits = {
  "update:modelValue": (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
  change: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
};

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
