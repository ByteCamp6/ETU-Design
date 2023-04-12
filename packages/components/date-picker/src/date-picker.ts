import type { ExtractPropTypes } from "vue";
import {
  isArray,
  isString,
  isNumber,
  isDate,
  isBoolean,
} from "@etu-design/utils";

export const datePickerProps = {
  modelValue: {
    type: [Date, Number, String, Array],
  },
  type: {
    type: String,
    values: [
      "year",
      "month",
      "date",
      "datetime",
      "week",
      "datetimerange",
      "daterange",
      "monthrange",
    ],
    default: "date",
  },
  placeholder: {
    type: String,
  },
  startPlaceholder: {
    type: String,
  },
  endPlaceholder: {
    type: String,
  },
  format: {
    type: String,
  },
  valueFormat: {
    type: String,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  editable: {
    type: Boolean,
    default: true,
  },
  clearable: {
    type: Boolean,
    default: true,
  },
};

export const datePickerEmits = {
  "update:modelValue": (val: string | number | Array<any> | boolean | object) =>
    isString(val) || isNumber(val) || isArray(val) || isDate(val),
  "visible-change": (val: boolean) => isBoolean(val),
  change: (val: string) => isString(val),
  blur: (event: FocusEvent) => event instanceof FocusEvent,
  focus: (event: FocusEvent) => event instanceof FocusEvent,
};

export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>;
export type DatePickerEmits = ExtractPropTypes<typeof datePickerEmits>;
