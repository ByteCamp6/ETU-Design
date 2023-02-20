import type { ExtractPropTypes } from "vue";
import type DropDown from "./dropdown.vue";
import { definePropType } from "@etu-design/utils";
export const dropDownProps = {
  maxHeight: { type: definePropType<number | string>([Number, String]) },
  canclePadding: {
    type: Boolean,
    default: true,
  },
  splitButton: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger", "default"],
    default: "primary",
  },
  size: {
    type: String,
    values: ["large", "default", "small"],
    default: "default",
  },
  placement: {
    type: String,
    default: "bottom",
    validator: (value: string) => {
      return (
        [
          "auto",
          "auto-start",
          "auto-end",
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
          "right",
          "right-start",
          "right-end",
          "left",
          "left-start",
          "left-end",
        ].indexOf(value) !== -1
      );
    },
  },
  trigger: {
    type: String,
    default: "hover",
  },
} as const;
export type DropDownProps = ExtractPropTypes<typeof dropDownProps>;
export const dropdownEmits = {
  command: (env: MouseEvent, command: string | number | object) => true,
  click: (env: MouseEvent) => env instanceof MouseEvent,
};
export type dropdownEmits = typeof dropdownEmits;

export type DropDownInstance = InstanceType<typeof DropDown>;
