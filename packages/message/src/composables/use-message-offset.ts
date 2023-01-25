import type { MessageProps } from "../message";
import { computed, ref } from "vue";
import { getLastOffset } from "./instance";
import type { CSSProperties } from "vue";
import { useResizeObserver } from "@etu-design/hooks";

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
