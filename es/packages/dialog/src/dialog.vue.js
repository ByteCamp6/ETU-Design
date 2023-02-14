import { defineComponent, ref, computed, provide, openBlock, createBlock, Teleport, createVNode, Transition, unref, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, mergeProps, createSlots, renderSlot, createCommentVNode, vShow } from "vue";
import { dialogProps, dialogEmits } from "./dialog.js";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { useSameTarget } from "../../hooks/use-same-target/index.js";
import { useDialog } from "./use-dialog.js";
import "../../overlay/index.js";
import _sfc_main$2 from "./dialog-content.vue.js";
import { dialogInjectionKey } from "../../tokens/dialog.js";
import _sfc_main$1 from "../../overlay/src/overlay.vue.js";
const __default__ = defineComponent({
  name: "EtuDialog"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: dialogProps,
  emits: dialogEmits,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("dialog");
    const dialogRef = ref();
    const headerRef = ref();
    const dialogContentRef = ref();
    const {
      visible,
      style,
      overlayDialogStyle,
      rendered,
      zIndex,
      afterEnter,
      afterLeave,
      beforeLeave,
      handleClose,
      onModalClick
    } = useDialog(props, dialogRef);
    const draggable = computed(() => props.draggable);
    provide(dialogInjectionKey, {
      dialogRef,
      headerRef,
      rendered,
      style
    });
    const overlayEvent = useSameTarget(onModalClick);
    expose({
      visible,
      dialogContentRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createVNode(Transition, {
          name: "dialog-fade",
          onAfterEnter: unref(afterEnter),
          onAfterLeave: unref(afterLeave),
          onBeforeLeave: unref(beforeLeave)
        }, {
          default: withCtx(() => [
            withDirectives(createVNode(unref(_sfc_main$1), {
              maskEvent: "",
              "z-index": unref(zIndex)
            }, {
              default: withCtx(() => [
                createElementVNode("div", {
                  role: "dialog",
                  class: normalizeClass("etu-overlay-dialog"),
                  style: normalizeStyle(unref(overlayDialogStyle)),
                  onClick: _cache[0] || (_cache[0] = //@ts-ignore
                  (...args) => unref(overlayEvent).onClick && unref(overlayEvent).onClick(...args)),
                  onMousedown: _cache[1] || (_cache[1] = //@ts-ignore
                  (...args) => unref(overlayEvent).onMousedown && unref(overlayEvent).onMousedown(...args)),
                  onMouseup: _cache[2] || (_cache[2] = //@ts-ignore
                  (...args) => unref(overlayEvent).onMouseup && unref(overlayEvent).onMouseup(...args))
                }, [
                  unref(rendered) ? (openBlock(), createBlock(_sfc_main$2, mergeProps({
                    key: 0,
                    ref_key: "dialogContentRef",
                    ref: dialogContentRef
                  }, _ctx.$attrs, {
                    "custom-class": props.customClass,
                    center: props.center,
                    "align-center": props.alignCenter,
                    "close-icon": props.closeIcon,
                    draggable: unref(draggable),
                    "show-close": props.showClose,
                    title: props.title,
                    onClose: unref(handleClose)
                  }), createSlots({
                    header: withCtx(() => [
                      !_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
                        key: 0,
                        close: unref(handleClose),
                        titleClass: unref(ns).e("title")
                      }) : renderSlot(_ctx.$slots, "title", { key: 1 })
                    ]),
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 2
                  }, [
                    _ctx.$slots.footer ? {
                      name: "footer",
                      fn: withCtx(() => [
                        renderSlot(_ctx.$slots, "footer")
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1040, ["custom-class", "center", "align-center", "close-icon", "draggable", "show-close", "title", "onClose"])) : createCommentVNode("", true)
                ], 36)
              ]),
              _: 3
            }, 8, ["z-index"]), [
              [vShow, unref(visible)]
            ])
          ]),
          _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
