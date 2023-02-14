import type { MessageProps } from "../message";
import { computed, ref } from "vue";
import { getLastOffset } from "./instance";
import type { CSSProperties } from "vue";
import { useResizeObserver } from "@etu-design/hooks";

/**
 * @description height是根据窗口的变换进行变化的，lastOffset是上一个Message实例的底部，
 * 被exposed暴露出来，offset是传入的Message 距离窗口顶部的偏移量，和上一个相加就是当前
 * 实例应该的高度位置，从而设置customStyle
 */
export const useMessageOffset = ({
  id,
  zIndex,
  offset,
}: Pick<MessageProps, "id" | "zIndex" | "offset">) => {
  const messageRef = ref<HTMLDivElement>();
  const height = ref(0);
  const lastOffset = computed(() => getLastOffset(id));
  const offsets = computed(() => offset + lastOffset.value);
  const bottom = computed((): number => height.value + offsets.value);
  const customStyle = computed<CSSProperties>(() => ({
    top: `${offsets.value}px`,
    zIndex: zIndex,
  }));

  useResizeObserver(messageRef, () => {
    height.value = messageRef.value!.getBoundingClientRect().height;
  });
  return {
    bottom,
    customStyle,
    messageRef,
  };
};
