"use strict";
const vue = require("vue");
const dialog = require("./dialog.js");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const index$1 = require("../../hooks/use-same-target/index.js");
const useDialog = require("./use-dialog.js");
require("../../overlay/index.js");
const dialogContent_vue_vue_type_script_setup_true_name_EtuDialogContent_lang = require("./dialog-content.vue.js");
const dialog$1 = require("../../tokens/dialog.js");
const overlay_vue_vue_type_script_setup_true_name_EtuOverlay_lang = require("../../overlay/src/overlay.vue.js");
const __default__ = vue.defineComponent({
  name: "EtuDialog",
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: dialog.dialogProps,
  emits: dialog.dialogEmits,
  setup(__props, { expose }) {
    const props = __props;
    const ns = index.useNamespace("dialog");
    const dialogRef = vue.ref();
    const headerRef = vue.ref();
    const dialogContentRef = vue.ref();
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
      onModalClick,
    } = useDialog.useDialog(props, dialogRef);
    const draggable = vue.computed(() => props.draggable);
    vue.provide(dialog$1.dialogInjectionKey, {
      dialogRef,
      headerRef,
      rendered,
      style,
    });
    const overlayEvent = index$1.useSameTarget(onModalClick);
    expose({
      visible,
      dialogContentRef,
    });
    return (_ctx, _cache) => {
      return (
        vue.openBlock(),
        vue.createBlock(vue.Teleport, { to: "body" }, [
          vue.createVNode(
            vue.Transition,
            {
              name: "dialog-fade",
              onAfterEnter: vue.unref(afterEnter),
              onAfterLeave: vue.unref(afterLeave),
              onBeforeLeave: vue.unref(beforeLeave),
            },
            {
              default: vue.withCtx(() => [
                vue.withDirectives(
                  vue.createVNode(
                    vue.unref(
                      overlay_vue_vue_type_script_setup_true_name_EtuOverlay_lang,
                    ),
                    {
                      maskEvent: "",
                      "z-index": vue.unref(zIndex),
                    },
                    {
                      default: vue.withCtx(() => [
                        vue.createElementVNode(
                          "div",
                          {
                            role: "dialog",
                            class: vue.normalizeClass("etu-overlay-dialog"),
                            style: vue.normalizeStyle(
                              vue.unref(overlayDialogStyle),
                            ),
                            onClick:
                              _cache[0] ||
                              (_cache[0] = //@ts-ignore
                                (...args) =>
                                  vue.unref(overlayEvent).onClick &&
                                  vue.unref(overlayEvent).onClick(...args)),
                            onMousedown:
                              _cache[1] ||
                              (_cache[1] = //@ts-ignore
                                (...args) =>
                                  vue.unref(overlayEvent).onMousedown &&
                                  vue.unref(overlayEvent).onMousedown(...args)),
                            onMouseup:
                              _cache[2] ||
                              (_cache[2] = //@ts-ignore
                                (...args) =>
                                  vue.unref(overlayEvent).onMouseup &&
                                  vue.unref(overlayEvent).onMouseup(...args)),
                          },
                          [
                            vue.unref(rendered)
                              ? (vue.openBlock(),
                                vue.createBlock(
                                  dialogContent_vue_vue_type_script_setup_true_name_EtuDialogContent_lang,
                                  vue.mergeProps(
                                    {
                                      key: 0,
                                      ref_key: "dialogContentRef",
                                      ref: dialogContentRef,
                                    },
                                    _ctx.$attrs,
                                    {
                                      "custom-class": props.customClass,
                                      center: props.center,
                                      "align-center": props.alignCenter,
                                      "close-icon": props.closeIcon,
                                      draggable: vue.unref(draggable),
                                      "show-close": props.showClose,
                                      title: props.title,
                                      onClose: vue.unref(handleClose),
                                    },
                                  ),
                                  vue.createSlots(
                                    {
                                      header: vue.withCtx(() => [
                                        !_ctx.$slots.title
                                          ? vue.renderSlot(
                                              _ctx.$slots,
                                              "header",
                                              {
                                                key: 0,
                                                close: vue.unref(handleClose),
                                                titleClass: vue
                                                  .unref(ns)
                                                  .e("title"),
                                              },
                                            )
                                          : vue.renderSlot(
                                              _ctx.$slots,
                                              "title",
                                              { key: 1 },
                                            ),
                                      ]),
                                      default: vue.withCtx(() => [
                                        vue.renderSlot(_ctx.$slots, "default"),
                                      ]),
                                      _: 2,
                                    },
                                    [
                                      _ctx.$slots.footer
                                        ? {
                                            name: "footer",
                                            fn: vue.withCtx(() => [
                                              vue.renderSlot(
                                                _ctx.$slots,
                                                "footer",
                                              ),
                                            ]),
                                            key: "0",
                                          }
                                        : void 0,
                                    ],
                                  ),
                                  1040,
                                  [
                                    "custom-class",
                                    "center",
                                    "align-center",
                                    "close-icon",
                                    "draggable",
                                    "show-close",
                                    "title",
                                    "onClose",
                                  ],
                                ))
                              : vue.createCommentVNode("", true),
                          ],
                          36,
                        ),
                      ]),
                      _: 3,
                    },
                    8,
                    ["z-index"],
                  ),
                  [[vue.vShow, vue.unref(visible)]],
                ),
              ]),
              _: 3,
            },
            8,
            ["onAfterEnter", "onAfterLeave", "onBeforeLeave"],
          ),
        ])
      );
    };
  },
});
module.exports = _sfc_main;
