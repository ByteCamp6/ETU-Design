import "vue";
import { isString } from "../../../node_modules/@vue/shared/dist/shared.esm-bundler.js";
import { isNumber, isBoolean } from "../../../node_modules/@vueuse/shared/index.js";
const checkboxProps = {
  /**
   * @description 绑定的值
   */
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  /**
   * @description 在复选框组中使用时复选框的值`
   */
  label: {
    type: [String, Boolean, Number]
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
  checked: Boolean
};
const checkboxEmits = {
  "update:modelValue": (val) => isString(val) || isNumber(val) || isBoolean(val),
  change: (val) => isString(val) || isNumber(val) || isBoolean(val)
};
export {
  checkboxEmits,
  checkboxProps
};
