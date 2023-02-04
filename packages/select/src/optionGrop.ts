import type { ExtractPropTypes } from "vue";

export const optionGroupProps = {
  label: {
    type: [String, Number],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
};

export type Props = ExtractPropTypes<typeof optionGroupProps>;
