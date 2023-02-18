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
} as const;

export type ColProps = ExtractPropTypes<typeof formProps>;
