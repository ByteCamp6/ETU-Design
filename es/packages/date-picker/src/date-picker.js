import "vue";
import { isString, isArray, isDate } from "../../../node_modules/@vue/shared/dist/shared.esm-bundler.js";
import { isNumber, isBoolean } from "../../../node_modules/@vueuse/shared/index.js";
const datePickerProps = {
  modelValue: {
    type: [Date, Number, String, Array]
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
      "monthrange"
    ],
    default: "date"
  },
  placeholder: {
    type: String
  },
  startPlaceholder: {
    type: String
  },
  endPlaceholder: {
    type: String
  },
  format: {
    type: String
  },
  valueFormat: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: true
  },
  clearable: {
    type: Boolean,
    default: true
  }
};
const datePickerEmits = {
  "update:modelValue": (val) => isString(val) || isNumber(val) || isArray(val) || isDate(val),
  "visible-change": (val) => isBoolean(val),
  change: (val) => isString(val),
  blur: (event) => event instanceof FocusEvent,
  focus: (event) => event instanceof FocusEvent
};
export {
  datePickerEmits,
  datePickerProps
};
