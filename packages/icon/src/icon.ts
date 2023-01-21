import type { ExtractPropTypes } from "vue";

export const iconProps = {
  name: {
    type: String,
    default: "",
  },
} as const;

export type IconProps = ExtractPropTypes<typeof iconProps>;
