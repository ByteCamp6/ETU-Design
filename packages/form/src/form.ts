import type { ExtractPropTypes, InjectionKey } from "vue";
import type { FormItemContext } from "./form-item";

export const formProps = {
  model: {
    type: Object,
    default: () => ({}),
  },
  rules: {
    type: Object,
    default: () => ({}),
  },
  showMessage: {
    type: Boolean,
    default: true,
  },
} as const;

export type FormProps = ExtractPropTypes<typeof formProps>;

export interface FormContext extends FormProps {
  addField: (field: FormItemContext) => void;
}
// export const FormContextKey: InjectionKey<FormContext> = Symbol();
