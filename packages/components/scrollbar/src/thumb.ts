import type { ExtractPropTypes } from "vue";

export const thumbProps = {
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: true,
  },
  always: Boolean,
};

export type Props = ExtractPropTypes<typeof thumbProps>;
