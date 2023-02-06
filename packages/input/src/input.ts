import type { ExtractPropTypes } from "vue";
export const InputProps = {
  placeholder: {
    type: String,
    default: "",
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  // readonly: Boolean,
  autocomplete: {
    type: String,
    default: "off",
  },
  modelValue: {
    type: String,
    default: "",
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    values: ["text", "textarea"],
    default: "text",
  },
  size: {
    type: String,
    values: ["small", "medium", "large"],
    default: "medium",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  prefixIcon: {
    type: String,
    default: "",
  },
  suffixIcon: {
    type: String,
    default: "",
  },
} as const;

// export type InputProps = ExtractPropTypes<typeof inputProps1>;
