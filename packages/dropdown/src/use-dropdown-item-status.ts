import { ref } from "vue";
import type { dropdownItemProps } from "./dropdown-item";
// import { isNumber } from "@etu-design/utils";

export const useDropDownItemStatus = (props: dropdownItemProps) => {
  const isDisabled = ref(props.disabled || false);
  return {
    isDisabled,
  };
};
export type useDropDownItemStatus = ReturnType<typeof useDropDownItemStatus>;
