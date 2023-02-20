import { defineComponent, useSlots, ref, computed, onMounted, toRefs, watch, watchEffect, openBlock, createElementBlock, Fragment, createElementVNode, unref, withKeys, renderSlot, createBlock, Teleport, normalizeClass, normalizeStyle, createVNode, Transition, withCtx, withDirectives, createTextVNode, toDisplayString, createCommentVNode, vShow } from "vue";
import { useClickAway } from "./composables/useClickAway.js";
import { useContent } from "./composables/useContent.js";
import { usePopper } from "./composables/usePopper.js";
import { useTimeEvent } from "./composables/useTimeEvent.js";
import _sfc_main$1 from "./arrow.vue.js";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import { useZIndex } from "../../hooks/use-z-index/index.js";
import { popperProps } from "./popper.js";
const __default__ = defineComponent({
  name: "EtuPopper"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: popperProps,
  emits: ["open", "close"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns = useNamespace("popper");
    const slots = useSlots();
    const popperContainerRef = ref(null);
    const popperRef = ref(null);
    const triggerRef = ref(null);
    const modifiedIsOpen = ref(false);
    const { nextZIndex } = useZIndex();
    const innerZIndex = ref(props.zIndex ? props.zIndex : nextZIndex());
    const contentCls = computed(() => {
      return [ns.e("content"), ns.is("canclePadding", props.canclePadding)];
    });
    onMounted(() => {
      var _a;
      const children = (_a = slots.default) == null ? void 0 : _a.call(slots);
      if (children && children.length > 1) {
        return console.error(
          `[Popper]: 该Popper组件只能有一个子节点，你传入了${children.length}个节点.`
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
      placement
    } = toRefs(props);
    const { isOpen, open, close } = usePopper({
      arrowPadding,
      emit,
      locked,
      offsetDistance,
      offsetSkid,
      placement,
      popperRef,
      triggerRef
    });
    const { hasContent } = useContent(slots, popperRef, content);
    const manualMode = computed(() => props.show !== null);
    const invalid = computed(() => disabled.value || !hasContent.value);
    const shouldShowPopper = computed(() => isOpen.value && !invalid.value);
    const enableClickAway = computed(
      () => !props.disableClickAway && !manualMode.value
    );
    const interactiveStyle = computed(
      () => props.interactive ? `border: ${offsetDistance.value}px solid transparent; margin: -${offsetDistance.value}px;` : null
    );
    const { openPopper, closePopper, doClose, doOpen } = useTimeEvent(
      props,
      manualMode,
      invalid,
      open,
      close
    );
    const togglePopper = () => {
      if (props.hover) {
        return;
      }
      isOpen.value ? closePopper() : openPopper();
    };
    watch([hasContent, disabled], ([hasContent2, disabled2]) => {
      if (isOpen.value && (!hasContent2 || disabled2)) {
        close();
      }
    });
    watch(isOpen, (isOpen2) => {
      if (isOpen2) {
        modifiedIsOpen.value = true;
      } else {
        setTimeout(() => {
          modifiedIsOpen.value = false;
        }, 200);
      }
    });
    watchEffect(() => {
      if (manualMode.value) {
        props.show ? doOpen() : doClose();
      }
    });
    watchEffect(() => {
      if (enableClickAway.value) {
        useClickAway(popperContainerRef, closePopper);
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
      close
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("span", {
          ref_key: "triggerRef",
          ref: triggerRef,
          onClick: togglePopper,
          onFocus: _cache[0] || (_cache[0] = //@ts-ignore
          (...args) => unref(openPopper) && unref(openPopper)(...args)),
          onKeyup: _cache[1] || (_cache[1] = withKeys(
            //@ts-ignore
            (...args) => unref(closePopper) && unref(closePopper)(...args),
            ["esc"]
          )),
          onMouseover: _cache[2] || (_cache[2] = ($event) => _ctx.hover && unref(openPopper)()),
          onMouseleave: _cache[3] || (_cache[3] = ($event) => _ctx.hover && unref(closePopper)())
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 544),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          createElementVNode("div", {
            class: normalizeClass([unref(ns).b()]),
            style: normalizeStyle(unref(interactiveStyle)),
            onMouseover: _cache[5] || (_cache[5] = ($event) => _ctx.hover && unref(openPopper)()),
            onMouseleave: _cache[6] || (_cache[6] = ($event) => _ctx.hover && unref(closePopper)()),
            ref_key: "popperContainerRef",
            ref: popperContainerRef
          }, [
            createVNode(Transition, { name: "popper-fade" }, {
              default: withCtx(() => [
                withDirectives(createElementVNode("div", {
                  onClick: _cache[4] || (_cache[4] = ($event) => !_ctx.interactive && unref(closePopper)()),
                  class: normalizeClass(unref(contentCls)),
                  style: normalizeStyle({ zIndex: innerZIndex.value }),
                  ref_key: "popperRef",
                  ref: popperRef
                }, [
                  renderSlot(_ctx.$slots, "content", {
                    close: unref(close),
                    isOpen: modifiedIsOpen.value
                  }, () => [
                    createTextVNode(toDisplayString(unref(content)), 1)
                  ]),
                  _ctx.arrow ? (openBlock(), createBlock(_sfc_main$1, { key: 0 })) : createCommentVNode("", true)
                ], 6), [
                  [vShow, unref(shouldShowPopper)]
                ])
              ]),
              _: 3
            })
          ], 38)
        ]))
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
