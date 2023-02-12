import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import type { Slots, Ref } from "vue";

export function useContent(
  slots: Slots,
  popperNode: Ref<HTMLElement>,
  content: Ref,
) {
  let observer: null | MutationObserver = null;
  const hasContent = ref(false);

  onMounted(() => {
    if (slots.content !== undefined || content.value) {
      hasContent.value = true;
    }

    observer = new MutationObserver(checkContent);
    observer.observe(popperNode.value, {
      childList: true,
      subtree: true,
    });
  });

  onBeforeUnmount(() => observer!.disconnect());

  /**
   * Watch the content prop
   */
  watch(content, (content) => {
    hasContent.value = !!content;
  });

  /**
   * Check the content slot
   */
  const checkContent = () => {
    hasContent.value = !!slots.content;
  };

  return {
    hasContent,
  };
}
