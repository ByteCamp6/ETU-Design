import type { ExtractPropTypes } from "vue";

export const formItemProps = {
  label: {
    type: String,
  },
  prop: {
    type: String,
  },
} as const;

export type ColProps = ExtractPropTypes<typeof formItemProps>;
