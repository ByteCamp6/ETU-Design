import type { ExtractPropTypes } from "vue";
import { now } from "../utils";
import dayjs from "dayjs";

export const sharedProps = {
  value: {
    type: dayjs.Dayjs,
  },
  model: {
    type: dayjs.Dayjs,
  },
  index: {
    type: Number,
    default: -1,
  },
};

export type SharedProps = ExtractPropTypes<typeof sharedProps>;
