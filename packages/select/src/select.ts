import { isString } from "../../utils/";
import type { ExtractPropTypes } from "vue";
import type Select from "./select.vue";

const booleanType = {
  type: Boolean,
  values: [true, false],
  default: false,
};

export const selectProps = {
  modelValue: {
    type: String,
  },
  size: {
    type: String,
    values: ["large", "default", "small"],
    default: "default",
  },
  noDataText: {
    type: String,
  },
  placement: {
    type: String,
    values: [
      "top",
      "top-start",
      "top-end",
      "bottom",
      "bottom-start",
      "bottom-end",
      "left",
      "left-start",
      "left-end",
      "right",
      "right-start",
      "right-end",
    ],
    default: "bottom-start",
  },
  placeholder: {
    type: String,
  },
  disabled: booleanType,
  filterable: booleanType,
} as const;

export const selectEmits = {
  change: (val: string) => isString(val),
  visibleChange: (val: string) => isString(val),
  blur: (event: FocusEvent) => event instanceof FocusEvent,
  focus: (event: FocusEvent) => event instanceof FocusEvent,
};

export type SelectProps = ExtractPropTypes<typeof selectProps>;
export type SelectInstance = InstanceType<typeof Select>;
