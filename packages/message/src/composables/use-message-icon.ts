import type { MessageProps } from "../message";
import { computed } from "vue";

export const useMessageIcon = (props: MessageProps) => {
  const TypeComponentsMap = {
    success: "success-filling",
    warning: "warning-filling",
    error: "delete-filling",
    info: "prompt-filling",
  };
  const type = props.type as keyof typeof TypeComponentsMap;
  const iconComponent = computed(
    () => props.icon || TypeComponentsMap[type] || "",
  );

  return {
    iconComponent,
  };
};
