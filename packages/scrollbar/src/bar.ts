import type { ExtractPropTypes } from "vue";

export const barProps = {
  always: {
    type: Boolean,
    default: true,
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1,
  },
  ratioY: {
    type: Number,
    default: 1,
  },
};

export type BarProps = ExtractPropTypes<typeof barProps>;
