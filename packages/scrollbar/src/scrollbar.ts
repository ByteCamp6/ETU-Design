import type { ExtractPropTypes } from "vue";
import { isNumber, isString } from "@etu-design/utils";

export const scrollbarProps = {
  height: {
    type: [Number, String],
    validator: (val: number | string): boolean =>
      isNumber(val) && isString(val),
  },
  maxHeight: {
    type: [Number, String],
    validator: (val: number | string): boolean =>
      isNumber(val) && isString(val),
  },
};

export type Props = ExtractPropTypes<typeof scrollbarProps>;
