"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const scrollbar = require("./scrollbar.js");
const bar_vue_vue_type_script_setup_true_lang = require("./bar.vue.js");
const __default__ = {
  name: "EtuScrollbar",
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: scrollbar.scrollbarProps,
  emits: scrollbar.scrollbarEmits,
  setup(__props, { emit }) {
    const props = __props;
    const wrap = vue.ref();
    const view = vue.ref();
    const barRef = vue.ref();
    const ns = index.useNamespace("scrollbar");
    const ratioY = vue.ref(1);
    const ratioX = vue.ref(1);
    const sizeWidth = vue.ref("0");
    const sizeHeight = vue.ref("0");
    const wrapperStyle = vue.computed(() => {
      return {
        height:
          typeof props.height === "number" ? props.height + "px" : props.height,
        maxHeight:
          typeof props.maxHeight === "number"
            ? props.maxHeight + "px"
            : props.maxHeight,
      };
    });
    const handleScroll = () => {
      var _a;
      if (wrap.value) {
        (_a = barRef.value) == null ? void 0 : _a.handleScroll(wrap.value);
        emit("scroll", {
          scrollTop: wrap.value.scrollTop,
          scrollLeft: wrap.value.scrollLeft,
        });
      }
    };
    const update = () => {
      if (!wrap.value || (props == null ? void 0 : props.native)) return;
      const offsetHeight = wrap.value.offsetHeight - 4;
      const offsetWidth = wrap.value.offsetWidth - 4;
      const originalHeight = offsetHeight ** 2 / wrap.value.scrollHeight;
      const originalWidth = offsetWidth ** 2 / wrap.value.scrollWidth;
      const height = Math.max(originalHeight, props.minSize);
      const width = Math.max(originalWidth, props.minSize);
      ratioY.value =
        originalHeight /
        (offsetHeight - originalHeight) /
        (height / (offsetHeight - height));
      ratioX.value =
        originalWidth /
        (offsetWidth - originalWidth) /
        (width / (offsetWidth - width));
      sizeHeight.value = height + 4 < offsetHeight ? `${height}px` : "";
      sizeWidth.value = width + 4 < offsetWidth ? `${width}px` : "";
    };
    vue.onMounted(() => {
      if (!props.native)
        vue.nextTick(() => {
          update();
        });
    });
    vue.onUpdated(() => update());
    return (_ctx, _cache) => {
      return (
        vue.openBlock(),
        vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass(vue.unref(ns).b()),
          },
          [
            vue.createElementVNode(
              "div",
              {
                ref_key: "wrap",
                ref: wrap,
                class: vue.normalizeClass([
                  vue.unref(ns).e("wrapper"),
                  {
                    [vue.unref(ns).em("wrapper", "hidden-default")]:
                      !_ctx.native,
                  },
                ]),
                style: vue.normalizeStyle(vue.unref(wrapperStyle)),
                onScroll: handleScroll,
              },
              [
                vue.createElementVNode(
                  "div",
                  {
                    class: vue.normalizeClass(vue.unref(ns).e("view")),
                    ref_key: "view",
                    ref: view,
                  },
                  [vue.renderSlot(_ctx.$slots, "default")],
                  2,
                ),
              ],
              38,
            ),
            !_ctx.native
              ? (vue.openBlock(),
                vue.createBlock(
                  bar_vue_vue_type_script_setup_true_lang,
                  {
                    key: 0,
                    always: _ctx.always,
                    width: sizeWidth.value,
                    height: sizeHeight.value,
                    ratioX: ratioX.value,
                    ratioY: ratioY.value,
                    ref_key: "barRef",
                    ref: barRef,
                  },
                  null,
                  8,
                  ["always", "width", "height", "ratioX", "ratioY"],
                ))
              : vue.createCommentVNode("", true),
          ],
          2,
        )
      );
    };
  },
});
module.exports = _sfc_main;
