import type { MessageProps } from "../message";
import { computed } from "vue";

/**
 * @description 对于不同的type，需要使用不同的图标，如果用户手动传了图标，以用户为准
 */
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
