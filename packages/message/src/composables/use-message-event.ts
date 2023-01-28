import type { MessageProps } from "../message";
import { useTimeoutFn } from "@etu-design/hooks";
import { onMounted, ref } from "vue";

export const useMessageEvent = ({
  duration,
}: Pick<MessageProps, "duration">) => {
  let stopTimer: (() => void) | undefined = undefined;
  const visible = ref(false);
  const startTimer = () => {
    if (duration === 0) return;
    ({ stop: stopTimer } = useTimeoutFn(() => {
      close();
    }, duration));
  };

  const clearTimer = () => {
    stopTimer?.();
  };

  const close = () => {
    visible.value = false;
  };

  const keydown = ({ code }: KeyboardEvent) => {
    if (code === "Escape") {
      // press esc to close the message
      close();
    }
  };

  onMounted(() => {
    startTimer();
    visible.value = true;
  });

  return {
    visible,
    startTimer,
    clearTimer,
    keydown,
    close,
  };
};
