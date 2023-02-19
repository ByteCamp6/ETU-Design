import type { ExtractPropTypes } from "vue";

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
