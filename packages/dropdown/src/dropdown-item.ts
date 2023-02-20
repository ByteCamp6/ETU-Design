import type { ExtractPropTypes } from "vue";
import type DropDownItem from "./dropdown-item.vue";
import { definePropType } from "@etu-design/utils";
export const dropdownItemProps = {
  command: {
    type: definePropType<number | string | object>([Object, String, Number]),
    default: () => "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  divided: {
    type: Boolean,
    default: false,
  },
} as const;
export type dropdownItemProps = ExtractPropTypes<typeof dropdownItemProps>;

export type DropDownItemInstance = InstanceType<typeof DropDownItem>;
