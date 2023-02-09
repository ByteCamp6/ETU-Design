"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../utils/types.js");
require("../../hooks/use-z-index/index.js");
const index$1 = require("../../hooks/use-same-target/index.js");
const overlay = require("./overlay.js");
const __default__ = vue.defineComponent({
  name: "EtuOverlay"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: overlay.overlayProps,
  emits: overlay.overlayEmits,
  setup(__props, { emit }) {
    const props = __props;
    const bem = index.useNamespace("overlay");
    const onMaskClick = (e) => {
      emit("click", e);
    };
    const overlayEvent = index$1.useSameTarget(props.maskEvent ? void 0 : onMaskClick);
    const tClass = vue.computed(() => {
      return [bem.b()];
    });
    const tStyle = vue.computed(() => {
      return {
        zIndex: props.zIndex
      };
    });
    return (_ctx, _cache) => {
      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(tClass)),
        style: vue.normalizeStyle(vue.unref(tStyle)),
        onClick: _cache[0] || (_cache[0] = //@ts-ignore
        (...args) => vue.unref(overlayEvent).onClick && vue.unref(overlayEvent).onClick(...args)),
        onMousedown: _cache[1] || (_cache[1] = //@ts-ignore
        (...args) => vue.unref(overlayEvent).onMousedown && vue.unref(overlayEvent).onMousedown(...args)),
        onMouseup: _cache[2] || (_cache[2] = //@ts-ignore
        (...args) => vue.unref(overlayEvent).onMouseup && vue.unref(overlayEvent).onMouseup(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 38)), [
        [vue.vShow, props.modelValue]
      ]);
    };
  }
});
module.exports = _sfc_main;
