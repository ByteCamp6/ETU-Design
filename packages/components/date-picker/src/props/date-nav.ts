import type { ExtractPropTypes } from "vue";
import { sharedProps } from "./shared";

export const dateNavProps = {
  left: {
    type: Boolean,
    default: true,
  },
  right: {
    type: Boolean,
    default: true,
  },
  change: {
    type: Boolean,
    default: true,
  },
  ...sharedProps,
};

export type DateNavProps = ExtractPropTypes<typeof dateNavProps>;
