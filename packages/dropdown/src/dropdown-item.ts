import type { ExtractPropTypes } from "vue";
import type DropDownItem from "./dropdown-item.vue";
export const dropdownItemProps = {
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
