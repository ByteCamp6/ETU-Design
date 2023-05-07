"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const select = require("./select.js");
const select$1 = require("../../tokens/select.js");
const useSelect = require("./useSelect.js");
require("../../../node_modules/animate.css/animate.css.js");
const _hoisted_1 = ["placeholder", "disabled"];
const __default__ = {
  name: "EtuSelect",
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: select.selectProps,
  emits: select.selectEmits,
  setup(__props, { emit }) {
    const props = __props;
    const select2 = vue.ref(null);
    const dropdown = vue.ref(null);
    const slots = vue.useSlots();
    const states = useSelect.useSelectStates(props);
    const {
      visible,
      currentLable,
      hover,
      filterable,
      caches,
      selected,
      empty,
    } = vue.toRefs(states);
    const {
      toggleMenu,
      hideMenu,
      handlerClickOption,
      onHover,
      onUnHover,
      isShow,
      isSelected,
      resetStates,
      addValue,
    } = useSelect.useSelect(states, props, emit);
    vue.provide(
      select$1.selectKey,
      vue.reactive({ props, handlerClickOption, isSelected, isShow, addValue }),
    );
    const ns = index.useNamespace("select");
    const onBlur = (e) => {
      emit && emit("blur", e);
    };
    const onFocus = (e) => {
      emit && emit("focus", e);
    };
    const selectClass = vue.computed(() => {
      return [
        ns.b(),
        props.size !== "default" ? ns.m(props.size) : "",
        ns.is("disabled", props.disabled),
        ns.is("focus", visible.value || filterable.value),
        ns.is("hover", hover.value),
      ];
    });
    const iconClass = vue.computed(() => [ns.e("icon")]);
    const dropdownClass = vue.computed(() => [ns.b("dropdown")]);
    const innerClass = vue.computed(() => [ns.e("inner")]);
    vue.onMounted(() => {
      window.addEventListener("click", hideMenu);
    });
    vue.onUnmounted(() => {
      window.removeEventListener("click", hideMenu);
    });
    return (_ctx, _cache) => {
      const _component_etu_tag = vue.resolveComponent("etu-tag");
      const _component_etu_icon = vue.resolveComponent("etu-icon");
      return (
        vue.openBlock(),
        vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass([...vue.unref(selectClass)]),
            onClick:
              _cache[1] ||
              (_cache[1] = vue.withModifiers(
                //@ts-ignore
                (...args) =>
                  vue.unref(toggleMenu) && vue.unref(toggleMenu)(...args),
                ["stop"],
              )),
            ref_key: "select",
            ref: select2,
            onMouseover:
              _cache[2] ||
              (_cache[2] = vue.withModifiers(
                //@ts-ignore
                (...args) => vue.unref(onHover) && vue.unref(onHover)(...args),
                ["self"],
              )),
            onMouseleave:
              _cache[3] ||
              (_cache[3] = vue.withModifiers(
                //@ts-ignore
                (...args) =>
                  vue.unref(onUnHover) && vue.unref(onUnHover)(...args),
                ["self"],
              )),
          },
          [
            vue.renderSlot(_ctx.$slots, "prefix"),
            !vue.unref(selected).length
              ? vue.withDirectives(
                  (vue.openBlock(),
                  vue.createElementBlock(
                    "input",
                    {
                      key: 0,
                      ref: "input",
                      class: vue.normalizeClass(vue.unref(innerClass)),
                      "onUpdate:modelValue":
                        _cache[0] ||
                        (_cache[0] = ($event) =>
                          vue.isRef(currentLable)
                            ? (currentLable.value = $event)
                            : null),
                      type: "text",
                      placeholder: props.placeholder,
                      disabled: !props.filterable,
                      onBlur,
                      onFocus,
                    },
                    null,
                    42,
                    _hoisted_1,
                  )),
                  [[vue.vModelText, vue.unref(currentLable)]],
                )
              : (vue.openBlock(),
                vue.createElementBlock(
                  "span",
                  {
                    key: 1,
                    class: vue.normalizeClass(vue.unref(ns).e("tag")),
                  },
                  [
                    (vue.openBlock(true),
                    vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(vue.unref(selected), (item) => {
                        return (
                          vue.openBlock(),
                          vue.createBlock(
                            _component_etu_tag,
                            { key: item },
                            {
                              default: vue.withCtx(() => [
                                vue.createTextVNode(
                                  vue.toDisplayString(item),
                                  1,
                                ),
                              ]),
                              _: 2,
                            },
                            1024,
                          )
                        );
                      }),
                      128,
                    )),
                  ],
                  2,
                )),
            vue.createElementVNode(
              "span",
              {
                class: vue.normalizeClass(vue.unref(iconClass)),
              },
              [
                vue.unref(caches).size === 0 || !vue.unref(hover)
                  ? (vue.openBlock(),
                    vue.createBlock(
                      _component_etu_icon,
                      {
                        key: 0,
                        class: vue.normalizeClass(
                          vue.unref(ns).e("icon-arrow"),
                        ),
                        name: "arrow-down-bold",
                      },
                      null,
                      8,
                      ["class"],
                    ))
                  : (vue.openBlock(),
                    vue.createBlock(
                      _component_etu_icon,
                      {
                        key: 1,
                        name: "error",
                        onClick: vue.withModifiers(vue.unref(resetStates), [
                          "stop",
                        ]),
                      },
                      null,
                      8,
                      ["onClick"],
                    )),
              ],
              2,
            ),
            vue.createVNode(
              vue.Transition,
              {
                "enter-active-class":
                  "animate__animated animate__fadeIn animate__faster",
                "leave-active-class":
                  "animate__animated animate__fadeOut animate__faster",
              },
              {
                default: vue.withCtx(() => [
                  vue.withDirectives(
                    vue.createElementVNode(
                      "div",
                      {
                        class: vue.normalizeClass(vue.unref(dropdownClass)),
                        ref_key: "dropdown",
                        ref: dropdown,
                      },
                      [
                        vue.createElementVNode(
                          "div",
                          {
                            class: vue.normalizeClass(
                              vue.unref(ns).be("dropdown", "wrapper"),
                            ),
                          },
                          [
                            vue.unref(slots).default
                              ? vue.renderSlot(_ctx.$slots, "default", {
                                  key: 0,
                                })
                              : (vue.openBlock(),
                                vue.createElementBlock(
                                  "span",
                                  {
                                    key: 1,
                                    class: vue.normalizeClass(
                                      vue.unref(ns).e("empty"),
                                    ),
                                  },
                                  "暂时没有数据",
                                  2,
                                )),
                          ],
                          2,
                        ),
                      ],
                      2,
                    ),
                    [[vue.vShow, vue.unref(visible)]],
                  ),
                ]),
                _: 3,
              },
            ),
          ],
          34,
        )
      );
    };
  },
});
module.exports = _sfc_main;
