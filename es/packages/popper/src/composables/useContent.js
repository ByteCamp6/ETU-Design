import { ref, onMounted, onBeforeUnmount, watch } from "vue";
function useContent(slots, popperRef, content) {
  let observer = null;
  const hasContent = ref(false);
  onMounted(() => {
    if (slots.content !== void 0 || content.value) {
      hasContent.value = true;
    }
    observer = new MutationObserver(checkContent);
    observer.observe(popperRef.value, {
      childList: true,
      subtree: true
    });
  });
  onBeforeUnmount(() => observer.disconnect());
  watch(content, (content2) => {
    hasContent.value = !!content2;
  });
  const checkContent = () => {
    hasContent.value = !!slots.content;
  };
  return {
    hasContent
  };
}
export {
  useContent
};
