import type { ExtractPropTypes } from "vue";
// import type checkboxGroup from "./checkbox-group.vue";
import type { CheckboxValueType } from "./checkbox";
import { isArray } from "@etu-design/utils";

export type CheckboxGroupValueType = CheckboxValueType[];

export const checkboxGroupProps = {
  /**
   * @description 绑定值
   */
  modelValue: {
    type: Array,
    default: () => [],
  },
  /**
   * @description whether the nesting checkboxes are disabled
   */
  disabled: Boolean,
  /**
   * @description 选中复选框的最小数量
   */
  min: Number,
  /**
   * @description 选中复选框的最大数量
   */
  max: Number,
} as const;

export const checkboxGroupEmits = {
  "update:modelValue": (val: CheckboxValueType[]) => isArray(val),
  change: (val: CheckboxValueType[]) => isArray(val),
};

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;
export type CheckboxGroupEmits = typeof checkboxGroupEmits;
// export type CheckboxGroupInstance = InstanceType<typeof checkboxGroup>;
