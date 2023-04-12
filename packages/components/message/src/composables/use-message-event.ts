import type { MessageProps } from "../message";
import { useTimeoutFn } from "@etu-design/hooks";
import { onMounted, ref } from "vue";

/**
 * @description visible表示message是否可见，startTimer表示开始计时，clearTimer表示
 * 清除计时，计时结束触发close函数，使visible不可见，当然我们也可以手动触发close函数，比如
 * 点击X这个按钮，或者点击esc
 */
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
