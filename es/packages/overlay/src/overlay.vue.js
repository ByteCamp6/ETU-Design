import { defineComponent, computed, withDirectives, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, renderSlot, vShow } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { useSameTarget } from "../../hooks/use-same-target/index.js";
import { overlayProps, overlayEmits } from "./overlay.js";
const __default__ = defineComponent({
  name: "EtuOverlay"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: overlayProps,
  emits: overlayEmits,
  setup(__props, { emit }) {
    const props = __props;
    const bem = useNamespace("overlay");
    const onMaskClick = (e) => {
      emit("click", e);
    };
    const overlayEvent = useSameTarget(props.maskEvent ? void 0 : onMaskClick);
    const tClass = computed(() => {
      return [bem.b()];
    });
    const tStyle = computed(() => {
      return {
        zIndex: props.zIndex
      };
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(tClass)),
        style: normalizeStyle(unref(tStyle)),
        onClick: _cache[0] || (_cache[0] = //@ts-ignore
        (...args) => unref(overlayEvent).onClick && unref(overlayEvent).onClick(...args)),
        onMousedown: _cache[1] || (_cache[1] = //@ts-ignore
        (...args) => unref(overlayEvent).onMousedown && unref(overlayEvent).onMousedown(...args)),
        onMouseup: _cache[2] || (_cache[2] = //@ts-ignore
        (...args) => unref(overlayEvent).onMouseup && unref(overlayEvent).onMouseup(...args))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 38)), [
        [vShow, props.modelValue]
      ]);
    };
  }
});
export {
  _sfc_main as default
};
