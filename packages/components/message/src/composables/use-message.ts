import type { MessageProps } from "../message";
import { useMessageIcon } from "./use-message-icon";
import { useMessageEvent } from "./use-message-event";
import { useMessageOffset } from "./use-message-offset";

export const useMessage = (props: MessageProps) => {
  const { bottom, customStyle, messageRef } = useMessageOffset(props);
  const { startTimer, clearTimer, keydown, visible, close } =
    useMessageEvent(props);
  const { iconComponent } = useMessageIcon(props);
  return {
    messageRef,
    bottom,
    customStyle,
    visible,
    startTimer,
    clearTimer,
    close,
    iconComponent,
  };
};
