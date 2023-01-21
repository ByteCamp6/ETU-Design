import type { RadioGroupProps } from "../radio/src/radio-group";
import type { InjectionKey, ToRefs } from "vue";

export type RadioGroupContext = {
  changeEvent: (val: RadioGroupProps["modelValue"]) => void;
} & ToRefs<RadioGroupProps>;

export const radioGroupKey: InjectionKey<RadioGroupContext> =
  Symbol("radioGroupKey");
