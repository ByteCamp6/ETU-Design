"use strict";
const vue = require("vue");
require("../../../icon/index.js");
const prev = require("./prev.js");
const icon_vue_vue_type_script_setup_true_lang = require("../../../icon/src/icon.vue.js");
const _hoisted_1 = ["disabled"];
const _hoisted_2 = { key: 0 };
const __default__ = vue.defineComponent({
  name: "EtuPaginationPrev",
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: prev.paginationPrevProps,
  emits: prev.paginationPrevEmits,
  setup(__props) {
    const props = __props;
    const internalDisabled = vue.computed(
      () => props.disabled || props.currentPage <= 1,
    );
    return (_ctx, _cache) => {
      return (
        vue.openBlock(),
        vue.createElementBlock(
          "button",
          {
            type: "button",
            class: "btn-prev",
            disabled: vue.unref(internalDisabled),
            onClick:
              _cache[0] ||
              (_cache[0] = ($event) => _ctx.$emit("click", $event)),
          },
          [
            props.prevText
              ? (vue.openBlock(),
                vue.createElementBlock(
                  "span",
                  _hoisted_2,
                  vue.toDisplayString(props.prevText),
                  1,
                ))
              : vue.createCommentVNode("", true),
            vue.createVNode(
              vue.unref(icon_vue_vue_type_script_setup_true_lang),
              { name: "arrow-left-bold" },
            ),
          ],
          8,
          _hoisted_1,
        )
      );
    };
  },
});
module.exports = _sfc_main;
