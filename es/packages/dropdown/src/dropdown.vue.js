import { defineComponent, provide, resolveComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, unref, renderSlot, createCommentVNode, createVNode, withCtx, createBlock } from "vue";
import "../../popper/index.js";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import scrollbar from "../../scrollbar/index.js";
import { dropDownProps, dropdownEmits } from "./dropdown.js";
import { dropdownKey } from "../../tokens/dropdown.js";
import { useDropdownEvent } from "./use-dropdown-event.js";
import { useDropDownStyle } from "./use-dropdown-style.js";
import _sfc_main$1 from "../../popper/src/popper.vue.js";
const _hoisted_1 = { style: {} };
const _hoisted_2 = { key: 1 };
const __default__ = defineComponent({
  name: "EtuDropdown"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: dropDownProps,
  emits: dropdownEmits,
  setup(__props) {
    const props = __props;
    const { Scrollbar: EtuScrollbar } = scrollbar;
    const ns = useNamespace("dropdown");
    const {
      scrollbarMaxHeight,
      canclePadding,
      placeMent,
      isTriggerHover,
      isUseArrowDown
    } = useDropDownStyle(props);
    const { handleMousedown, onButtonClick } = useDropdownEvent();
    provide(dropdownKey, {
      handleMousedown
    });
    const dropdownCls = [ns.b()];
    const bgCls = [
      ns.b("button-group"),
      ns.bm("button-group", props.type),
      ns.bm("button-group", props.size)
    ];
    return (_ctx, _cache) => {
      const _component_etu_icon = resolveComponent("etu-icon");
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(dropdownCls)
      }, [
        createElementVNode("span", _hoisted_1, [
          _ctx.splitButton ? (openBlock(), createElementBlock("button", {
            key: 0,
            style: { "border-radius": "5px 0 0 5px" },
            class: normalizeClass(_ctx.splitButton ? bgCls : []),
            onClick: _cache[0] || (_cache[0] = //@ts-ignore
            (...args) => unref(onButtonClick) && unref(onButtonClick)(...args))
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)) : createCommentVNode("", true),
          createVNode(unref(_sfc_main$1), {
            arrow: "",
            hover: unref(isTriggerHover),
            canclePadding: true,
            placement: unref(placeMent)
          }, {
            content: withCtx(() => [
              createVNode(unref(EtuScrollbar), {
                "max-height": unref(scrollbarMaxHeight),
                canclePadding: unref(canclePadding)
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "dropdown")
                ]),
                _: 3
              }, 8, ["max-height", "canclePadding"])
            ]),
            default: withCtx(() => [
              _ctx.splitButton ? (openBlock(), createElementBlock("button", {
                key: 0,
                class: normalizeClass(_ctx.splitButton ? bgCls : []),
                style: { "border-radius": "0 5px 5px 0" }
              }, [
                _ctx.splitButton ? (openBlock(), createBlock(_component_etu_icon, {
                  key: 0,
                  name: "arrow-down-bold"
                })) : createCommentVNode("", true)
              ], 2)) : (openBlock(), createElementBlock("span", _hoisted_2, [
                renderSlot(_ctx.$slots, "default"),
                unref(isUseArrowDown) ? (openBlock(), createBlock(_component_etu_icon, {
                  key: 0,
                  name: "arrow-down-bold"
                })) : createCommentVNode("", true)
              ]))
            ]),
            _: 3
          }, 8, ["hover", "placement"])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
