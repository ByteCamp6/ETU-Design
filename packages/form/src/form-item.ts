import type { PropType } from "vue";
import type { ExtractPropTypes } from "vue";
import type { RuleItem } from "async-validator";

// 申明泛型约束
export type Arrayable<T> = T | T[];
export interface formItemRule extends RuleItem {
  trigger?: string | string[];
}

export const formItemValidateState = ["success", "error", ""] as const;
export type FormItemValidateState = (typeof formItemValidateState)[number];

export const formItemProps = {
  label: String,
  prop: String,
  rules: [Object, Array] as PropType<Arrayable<formItemRule>>,
  showMessage: {
    type: Boolean,
    default: true,
  },
} as const;

// Partial选填
export type FormItemProps = Partial<ExtractPropTypes<typeof formItemProps>>;
