"use strict";
const vue = require("vue");
const useClickAway = require("./composables/useClickAway.js");
const useContent = require("./composables/useContent.js");
const usePopper = require("./composables/usePopper.js");
const useTimeEvent = require("./composables/useTimeEvent.js");
const arrow_vue_vue_type_script_setup_true_lang = require("./arrow.vue.js");
const index = require("../../hooks/use-namespace/index.js");
const index$1 = require("../../hooks/use-z-index/index.js");
const popper = require("./popper.js");
const __default__ = vue.defineComponent({
  name: "EtuPopper",
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: popper.popperProps,
  emits: ["open", "close"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns = index.useNamespace("popper");
    const slots = vue.useSlots();
    const popperContainerRef = vue.ref(null);
    const popperRef = vue.ref(null);
    const triggerRef = vue.ref(null);
    const modifiedIsOpen = vue.ref(false);
    const { nextZIndex } = index$1.useZIndex();
    const innerZIndex = vue.ref(props.zIndex ? props.zIndex : nextZIndex());
    const contentCls = vue.computed(() => {
      return [ns.e("content"), ns.is("canclePadding", props.canclePadding)];
    });
    vue.onMounted(() => {
      var _a;
      const children = (_a = slots.default) == null ? void 0 : _a.call(slots);
      if (children && children.length > 1) {
        return console.error(
          `[Popper]: 该Popper组件只能有一个子节点，你传入了${children.length}个节点.`,
        );
      }
    });
    const {
      arrowPadding,
      content,
      disabled,
      locked,
      offsetDistance,
      offsetSkid,
      placement,
    } = vue.toRefs(props);
    const { isOpen, open, close } = usePopper.usePopper({
      arrowPadding,
      emit,
      locked,
      offsetDistance,
      offsetSkid,
      placement,
      popperRef,
      triggerRef,
    });
    const { hasContent } = useContent.useContent(slots, popperRef, content);
    const manualMode = vue.computed(() => props.show !== null);
    const invalid = vue.computed(() => disabled.value || !hasContent.value);
    const shouldShowPopper = vue.computed(() => isOpen.value && !invalid.value);
    const enableClickAway = vue.computed(
      () => !props.disableClickAway && !manualMode.value,
    );
    const interactiveStyle = vue.computed(() =>
      props.interactive
        ? `border: ${offsetDistance.value}px solid transparent; margin: -${offsetDistance.value}px;`
        : null,
    );
    const { openPopper, closePopper, doClose, doOpen } =
      useTimeEvent.useTimeEvent(props, manualMode, invalid, open, close);
    const togglePopper = () => {
      if (props.hover) {
        return;
      }
      isOpen.value ? closePopper() : openPopper();
    };
    vue.watch([hasContent, disabled], ([hasContent2, disabled2]) => {
      if (isOpen.value && (!hasContent2 || disabled2)) {
        close();
      }
    });
    vue.watch(isOpen, (isOpen2) => {
      if (isOpen2) {
        modifiedIsOpen.value = true;
      } else {
        setTimeout(() => {
          modifiedIsOpen.value = false;
        }, 200);
      }
    });
    vue.watchEffect(() => {
      if (manualMode.value) {
        props.show ? doOpen() : doClose();
      }
    });
    vue.watchEffect(() => {
      if (enableClickAway.value) {
        useClickAway.useClickAway(popperContainerRef, closePopper);
      }
    });
    expose({
      popperContainerRef,
      popperRef,
      triggerRef,
      isOpen,
      doOpen,
      doClose,
      open,
      close,
    });
    return (_ctx, _cache) => {
      return (
        vue.openBlock(),
        vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode(
              "span",
              {
                ref_key: "triggerRef",
                ref: triggerRef,
                onClick: togglePopper,
                onFocus:
                  _cache[0] ||
                  (_cache[0] = //@ts-ignore
                    (...args) =>
                      vue.unref(openPopper) && vue.unref(openPopper)(...args)),
                onKeyup:
                  _cache[1] ||
                  (_cache[1] = vue.withKeys(
                    //@ts-ignore
                    (...args) =>
                      vue.unref(closePopper) && vue.unref(closePopper)(...args),
                    ["esc"],
                  )),
                onMouseover:
                  _cache[2] ||
                  (_cache[2] = ($event) =>
                    _ctx.hover && vue.unref(openPopper)()),
                onMouseleave:
                  _cache[3] ||
                  (_cache[3] = ($event) =>
                    _ctx.hover && vue.unref(closePopper)()),
              },
              [vue.renderSlot(_ctx.$slots, "default")],
              544,
            ),
            (vue.openBlock(),
            vue.createBlock(vue.Teleport, { to: "body" }, [
              vue.createElementVNode(
                "div",
                {
                  class: vue.normalizeClass([vue.unref(ns).b()]),
                  style: vue.normalizeStyle(vue.unref(interactiveStyle)),
                  onMouseover:
                    _cache[5] ||
                    (_cache[5] = ($event) =>
                      _ctx.hover && vue.unref(openPopper)()),
                  onMouseleave:
                    _cache[6] ||
                    (_cache[6] = ($event) =>
                      _ctx.hover && vue.unref(closePopper)()),
                  ref_key: "popperContainerRef",
                  ref: popperContainerRef,
                },
                [
                  vue.createVNode(
                    vue.Transition,
                    { name: "popper-fade" },
                    {
                      default: vue.withCtx(() => [
                        vue.withDirectives(
                          vue.createElementVNode(
                            "div",
                            {
                              onClick:
                                _cache[4] ||
                                (_cache[4] = ($event) =>
                                  !_ctx.interactive &&
                                  vue.unref(closePopper)()),
                              class: vue.normalizeClass(vue.unref(contentCls)),
                              style: vue.normalizeStyle({
                                zIndex: innerZIndex.value,
                              }),
                              ref_key: "popperRef",
                              ref: popperRef,
                            },
                            [
                              vue.renderSlot(
                                _ctx.$slots,
                                "content",
                                {
                                  close: vue.unref(close),
                                  isOpen: modifiedIsOpen.value,
                                },
                                () => [
                                  vue.createTextVNode(
                                    vue.toDisplayString(vue.unref(content)),
                                    1,
                                  ),
                                ],
                              ),
                              _ctx.arrow
                                ? (vue.openBlock(),
                                  vue.createBlock(
                                    arrow_vue_vue_type_script_setup_true_lang,
                                    { key: 0 },
                                  ))
                                : vue.createCommentVNode("", true),
                            ],
                            6,
                          ),
                          [[vue.vShow, vue.unref(shouldShowPopper)]],
                        ),
                      ]),
                      _: 3,
                    },
                  ),
                ],
                38,
              ),
            ])),
          ],
          64,
        )
      );
    };
  },
});
module.exports = _sfc_main;
