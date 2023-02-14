"use strict";
const vue = require("vue");
const usePagination = require("../use-pagination.js");
const index = require("../../../hooks/use-namespace/index.js");
require("../../../hooks/use-z-index/index.js");
require("../../../input/index.js");
const input_vue_vue_type_script_setup_true_name_EtuInput_lang = require("../../../input/src/input.vue.js");
const _hoisted_1 = ["disabled"];
const __default__ = vue.defineComponent({
  name: "EtuPaginationJumper"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  setup(__props) {
    const ns = index.useNamespace("pagination");
    const { pageCount, disabled, currentPage, changeEvent } = usePagination.usePagination();
    const userInput = vue.ref();
    const innerValue = vue.computed(() => userInput.value ?? (currentPage == null ? void 0 : currentPage.value));
    function handleInput(val) {
      userInput.value = +val;
    }
    function handleChange(val) {
      val = Math.trunc(+val);
      changeEvent == null ? void 0 : changeEvent(+val);
      userInput.value = void 0;
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("span", {
        class: vue.normalizeClass(vue.unref(ns).e("jump")),
        disabled: vue.unref(disabled)
      }, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass([vue.unref(ns).e("goto")])
        }, "跳转至", 2),
        vue.createVNode(vue.unref(input_vue_vue_type_script_setup_true_name_EtuInput_lang), {
          class: vue.normalizeClass([vue.unref(ns).e("editor"), vue.unref(ns).is("in-pagination")]),
          min: 1,
          max: vue.unref(pageCount),
          disabled: vue.unref(disabled),
          "model-value": vue.unref(innerValue),
          type: "number",
          "onUpdate:modelValue": handleInput,
          onChange: handleChange
        }, null, 8, ["class", "max", "disabled", "model-value"]),
        vue.createElementVNode("span", {
          class: vue.normalizeClass([vue.unref(ns).e("classifier")])
        }, null, 2)
      ], 10, _hoisted_1);
    };
  }
});
module.exports = _sfc_main;
