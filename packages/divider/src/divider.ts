import type { ExtractPropTypes } from "vue";
import type Divider from "./divider.vue";

export const dividerProps = {
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal",
  },
  contentPosition: {
    type: String,
    values: ["center", "left", "right"],
    default: "center",
  },
  borderStyle: {
    type: String,
    values: [
      "solid",
      "dotted",
      "dashed",
      "double",
      "groove",
      "ridge",
      "inset",
      "outset",
    ],
    default: "solid",
  },
} as const;

export type Props = ExtractPropTypes<typeof dividerProps>;
export type DividerInstance = InstanceType<typeof Divider>;
