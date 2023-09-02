import type { ExtractPropTypes } from "vue";

export const iconProps = {
  name: {
    type: String,
    default: "",
  },
  size: {
    type: Number,
  },
  color: {
    type: String,
  },
} as const;

export type IconProps = ExtractPropTypes<typeof iconProps>;
