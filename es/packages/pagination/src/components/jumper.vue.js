import { defineComponent, ref, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, createVNode } from "vue";
import { usePagination } from "../use-pagination.js";
import { useNamespace } from "../../../hooks/use-namespace/index.js";
import "../../../hooks/use-z-index/index.js";
import "../../../input/index.js";
import _sfc_main$1 from "../../../input/src/input.vue.js";
const _hoisted_1 = ["disabled"];
const __default__ = defineComponent({
  name: "EtuPaginationJumper"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const ns = useNamespace("pagination");
    const { pageCount, disabled, currentPage, changeEvent } = usePagination();
    const userInput = ref();
    const innerValue = computed(() => userInput.value ?? (currentPage == null ? void 0 : currentPage.value));
    function handleInput(val) {
      userInput.value = +val;
    }
    function handleChange(val) {
      val = Math.trunc(+val);
      changeEvent == null ? void 0 : changeEvent(+val);
      userInput.value = void 0;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns).e("jump")),
        disabled: unref(disabled)
      }, [
        createElementVNode("span", {
          class: normalizeClass([unref(ns).e("goto")])
        }, "跳转至", 2),
        createVNode(unref(_sfc_main$1), {
          class: normalizeClass([unref(ns).e("editor"), unref(ns).is("in-pagination")]),
          min: 1,
          max: unref(pageCount),
          disabled: unref(disabled),
          "model-value": unref(innerValue),
          type: "number",
          "onUpdate:modelValue": handleInput,
          onChange: handleChange
        }, null, 8, ["class", "max", "disabled", "model-value"]),
        createElementVNode("span", {
          class: normalizeClass([unref(ns).e("classifier")])
        }, null, 2)
      ], 10, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
