import type { ExtractPropTypes } from "vue";
import type Progress from "./progress.vue";

export const progressProps = {
  percentage: {
    type: Number,
    default: 0,
    validator: (val: number): boolean => val >= 0 && val <= 100,
  },
  type: {
    type: String,
    default: "line",
    values: ["line", "circle", "dashboard"],
  },
  status: {
    type: String,
    default: "",
    values: ["", "success", "exception", "warning"],
  },
  textInside: {
    type: Boolean,
    default: false,
  },
  indeterminate: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 3,
  },
  strokeWidth: {
    type: Number,
    default: 6,
  },
  width: {
    type: Number,
    default: 126,
  },
  showText: {
    type: Boolean,
    default: true,
  },
} as const;

export type Props = ExtractPropTypes<typeof progressProps>;
export type ProgressInstance = InstanceType<typeof Progress>;
