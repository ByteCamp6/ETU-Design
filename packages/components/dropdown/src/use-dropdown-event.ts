import type { dropDownProps } from "./dropdown";
import { getCurrentInstance } from "vue";
export const useDropdownEvent = (props: dropDownProps) => {
  const { emit } = getCurrentInstance()!;
  const handleMousedown = (command: string | number | object, e: Event) => {
    const arg = command ? [command, e] : [{}, e];
    emit("command", ...arg);
  };
  const onButtonClick = (e: Event) => {
    emit("click", e);
  };
  return {
    handleMousedown,
    onButtonClick,
  };
};
