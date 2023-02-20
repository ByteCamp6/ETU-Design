"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
function useContent(slots, popperRef, content) {
  let observer = null;
  const hasContent = vue.ref(false);
  vue.onMounted(() => {
    if (slots.content !== void 0 || content.value) {
      hasContent.value = true;
    }
    observer = new MutationObserver(checkContent);
    observer.observe(popperRef.value, {
      childList: true,
      subtree: true
    });
  });
  vue.onBeforeUnmount(() => observer.disconnect());
  vue.watch(content, (content2) => {
    hasContent.value = !!content2;
  });
  const checkContent = () => {
    hasContent.value = !!slots.content;
  };
  return {
    hasContent
  };
}
exports.useContent = useContent;
