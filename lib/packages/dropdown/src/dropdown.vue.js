"use strict";
const vue = require("vue");
require("../../popper/index.js");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const index$1 = require("../../scrollbar/index.js");
const dropdown = require("./dropdown.js");
const dropdown$1 = require("../../tokens/dropdown.js");
const useDropdownEvent = require("./use-dropdown-event.js");
const useDropdownStyle = require("./use-dropdown-style.js");
const popper_vue_vue_type_script_setup_true_name_EtuPopper_lang = require("../../popper/src/popper.vue.js");
const _hoisted_1 = { style: {} };
const _hoisted_2 = { key: 1 };
const __default__ = vue.defineComponent({
  name: "EtuDropdown",
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: dropdown.dropDownProps,
  emits: dropdown.dropdownEmits,
  setup(__props) {
    const props = __props;
    const { Scrollbar: EtuScrollbar } = index$1.default;
    const ns = index.useNamespace("dropdown");
    const {
      scrollbarMaxHeight,
      canclePadding,
      placeMent,
      isTriggerHover,
      isUseArrowDown,
    } = useDropdownStyle.useDropDownStyle(props);
    const { handleMousedown, onButtonClick } =
      useDropdownEvent.useDropdownEvent();
    vue.provide(dropdown$1.dropdownKey, {
      handleMousedown,
    });
    const dropdownCls = [ns.b()];
    const bgCls = [
      ns.b("button-group"),
      ns.bm("button-group", props.type),
      ns.bm("button-group", props.size),
    ];
    return (_ctx, _cache) => {
      const _component_etu_icon = vue.resolveComponent("etu-icon");
      return (
        vue.openBlock(),
        vue.createElementBlock(
          "span",
          {
            class: vue.normalizeClass(dropdownCls),
          },
          [
            vue.createElementVNode("span", _hoisted_1, [
              _ctx.splitButton
                ? (vue.openBlock(),
                  vue.createElementBlock(
                    "button",
                    {
                      key: 0,
                      style: { "border-radius": "5px 0 0 5px" },
                      class: vue.normalizeClass(_ctx.splitButton ? bgCls : []),
                      onClick:
                        _cache[0] ||
                        (_cache[0] = //@ts-ignore
                          (...args) =>
                            vue.unref(onButtonClick) &&
                            vue.unref(onButtonClick)(...args)),
                    },
                    [vue.renderSlot(_ctx.$slots, "default")],
                    2,
                  ))
                : vue.createCommentVNode("", true),
              vue.createVNode(
                vue.unref(
                  popper_vue_vue_type_script_setup_true_name_EtuPopper_lang,
                ),
                {
                  arrow: "",
                  hover: vue.unref(isTriggerHover),
                  canclePadding: true,
                  placement: vue.unref(placeMent),
                },
                {
                  content: vue.withCtx(() => [
                    vue.createVNode(
                      vue.unref(EtuScrollbar),
                      {
                        "max-height": vue.unref(scrollbarMaxHeight),
                        canclePadding: vue.unref(canclePadding),
                      },
                      {
                        default: vue.withCtx(() => [
                          vue.renderSlot(_ctx.$slots, "dropdown"),
                        ]),
                        _: 3,
                      },
                      8,
                      ["max-height", "canclePadding"],
                    ),
                  ]),
                  default: vue.withCtx(() => [
                    _ctx.splitButton
                      ? (vue.openBlock(),
                        vue.createElementBlock(
                          "button",
                          {
                            key: 0,
                            class: vue.normalizeClass(
                              _ctx.splitButton ? bgCls : [],
                            ),
                            style: { "border-radius": "0 5px 5px 0" },
                          },
                          [
                            _ctx.splitButton
                              ? (vue.openBlock(),
                                vue.createBlock(_component_etu_icon, {
                                  key: 0,
                                  name: "arrow-down-bold",
                                }))
                              : vue.createCommentVNode("", true),
                          ],
                          2,
                        ))
                      : (vue.openBlock(),
                        vue.createElementBlock("span", _hoisted_2, [
                          vue.renderSlot(_ctx.$slots, "default"),
                          vue.unref(isUseArrowDown)
                            ? (vue.openBlock(),
                              vue.createBlock(_component_etu_icon, {
                                key: 0,
                                name: "arrow-down-bold",
                              }))
                            : vue.createCommentVNode("", true),
                        ])),
                  ]),
                  _: 3,
                },
                8,
                ["hover", "placement"],
              ),
            ]),
          ],
        )
      );
    };
  },
});
module.exports = _sfc_main;
