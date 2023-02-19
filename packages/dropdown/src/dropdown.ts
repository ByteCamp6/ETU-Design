import type { ExtractPropTypes } from "vue";
import type DropDown from "./dropdown.vue";
import { definePropType } from "@etu-design/utils";
export const dropDownProps = {
  maxHeight: { type: definePropType<number | string>([Number, String]) },
  canclePadding: {
    type: Boolean,
    default: true,
  },
} as const;
export type dropDownProps = ExtractPropTypes<typeof dropDownProps>;
export const DropDownEmits = {
  click: (env: MouseEvent) => env instanceof MouseEvent,
};
export type DropDownEmits = typeof DropDownEmits;

export type DropDownInstance = InstanceType<typeof DropDown>;
