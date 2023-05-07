import "vue";
import { isArray } from "../../../node_modules/@vue/shared/dist/shared.esm-bundler.js";
const checkboxGroupProps = {
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
  size: {
    type: String,
    values: ["large", "default", "small"],
    default: "default",
  },
};
const checkboxGroupEmits = {
  "update:modelValue": (val) => isArray(val),
  change: (val) => isArray(val),
};
export { checkboxGroupEmits, checkboxGroupProps };
