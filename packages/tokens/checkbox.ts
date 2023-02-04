import type { InjectionKey, ToRefs, WritableComputedRef } from "vue";
import type { CheckboxGroupProps } from "../checkbox/src/checkbox-group";

type CheckboxGroupContext = {
  modelValue?: WritableComputedRef<any>;
  changeEvent?: (...args: any) => any;
} & ToRefs<CheckboxGroupProps>;

export const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext> =
  Symbol("checkboxGroupContextKey");
