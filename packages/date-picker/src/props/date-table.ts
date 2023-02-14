import type { ExtractPropTypes } from "vue";
import { sharedProps } from "./shared";

export const dateTableProps = {
  ...sharedProps,
};

export type DateTableProps = ExtractPropTypes<typeof dateTableProps>;
