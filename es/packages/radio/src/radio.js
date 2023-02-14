import "vue";
import { isString } from "../../../node_modules/@vue/shared/dist/shared.esm-bundler.js";
import { isNumber, isBoolean } from "../../../node_modules/@vueuse/shared/index.js";
const radioProps = {
  /**
   * @description 单选框的大小
   */
  size: {
    type: String,
    values: ["large", "default", "small"],
    default: "default"
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
    default: ""
  },
  /**
   * @description 单选框对应的值
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  }
};
const radioEmits = {
  "update:modelValue": (val) => isString(val) || isNumber(val) || isBoolean(val),
  change: (val) => isString(val) || isNumber(val) || isBoolean(val)
};
export {
  radioEmits,
  radioProps
};
