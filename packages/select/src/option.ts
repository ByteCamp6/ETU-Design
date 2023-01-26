import type { ExtractPropTypes } from "vue";

export const optionProps = {
  value: {
    type: [String, Number, Boolean, Object],
  },
  label: {
    type: [String, Number],
  },
  disabled: {
    type: Boolean,
    values: [true, false],
    default: false,
  },
};

export type Props = ExtractPropTypes<typeof optionProps>;
