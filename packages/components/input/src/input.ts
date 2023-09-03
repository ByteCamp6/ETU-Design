import type { ExtractPropTypes } from "vue";
import { definePropType, isString } from "@etu-design/utils";
export const inputProps = {
  placeholder: {
    type: String,
    default: "",
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  // readonly: Boolean,
  autocomplete: {
    type: String,
    default: "off",
  },
  modelValue: {
    type: definePropType<string | number | null | undefined>([String, Number]),
    default: "",
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    values: ["text", "textarea"],
    default: "text",
  },
  size: {
    type: String,
    values: ["small", "medium", "large"],
    default: "medium",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  prefixIcon: {
    type: String,
    default: "",
  },
  suffixIcon: {
    type: String,
    default: "",
  },
  formatter: {
    type: Function,
  },
  parser: {
    type: Function,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
  },
} as const;

export type InputProps = ExtractPropTypes<typeof inputProps>;

export const inputEmits = {
  "update:modelValue": (value: string) => isString(value),
  // 输入
  input: (value: string) => isString(value),
  // 离开焦点
  change: (value: string) => isString(value),
  // 获取焦点
  focus: (e: FocusEvent) => e instanceof FocusEvent,
  // 失焦
  blur: (e: FocusEvent) => e instanceof FocusEvent,
  // 清空
  clear: () => true,
  mouseleave: (evt: MouseEvent) => evt instanceof MouseEvent,
  mouseenter: (evt: MouseEvent) => evt instanceof MouseEvent,
};

//组件发送事件类型
export type InputEmits = typeof inputEmits;
