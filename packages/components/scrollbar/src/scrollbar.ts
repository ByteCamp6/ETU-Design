import type { ExtractPropTypes } from "vue";
import { isNumber, isString } from "@etu-design/utils";

export const scrollbarProps = {
  height: {
    type: [Number, String],
    validator: (val: number | string): boolean =>
      isNumber(val) || isString(val),
  },
  maxHeight: {
    type: [Number, String],
    validator: (val: number | string): boolean =>
      isNumber(val) || isString(val),
  },
  minSize: {
    type: Number,
    default: 20,
  },
  native: {
    type: Boolean,
    default: true,
  },
  always: {
    type: Boolean,
    default: true,
  },
};

export const scrollbarEmits = {
  scroll: ({
    scrollTop,
    scrollLeft,
  }: {
    scrollTop: number;
    scrollLeft: number;
  }) => [scrollTop, scrollLeft].every(isNumber),
};

export type Props = ExtractPropTypes<typeof scrollbarProps>;
