import { defineComponent, ref, useSlots, toRefs, provide, reactive, computed, onMounted, onUnmounted, resolveComponent, openBlock, createElementBlock, normalizeClass, unref, withModifiers, withDirectives, isRef, vModelText, Fragment, renderList, createBlock, withCtx, createTextVNode, toDisplayString, createElementVNode, createVNode, Transition, renderSlot, vShow } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../utils/types.js";
import "../../hooks/use-z-index/index.js";
import { selectProps, selectEmits } from "./select.js";
import { selectKey } from "../../tokens/select.js";
import { useSelectStates, useSelect } from "./useSelect.js";
import "../../../node_modules/animate.css/animate.css.js";
const _hoisted_1 = ["placeholder", "disabled"];
const __default__ = {
  name: "EtuSelect"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: selectProps,
  emits: selectEmits,
  setup(__props, { emit }) {
    const props = __props;
    const select = ref(null);
    const dropdown = ref(null);
    const slots = useSlots();
    const states = useSelectStates(props);
    const { visible, currentLable, hover, filterable, caches, selected, empty } = toRefs(states);
    const {
      toggleMenu,
      hideMenu,
      handlerClickOption,
      onHover,
      onUnHover,
      isSelected,
      resetStates
    } = useSelect(states, props, emit);
    provide(selectKey, reactive({ props, handlerClickOption, isSelected, caches }));
    const nc = useNamespace("select");
    const onBlur = (e) => {
      emit && emit("blur", e);
    };
    const onFocus = (e) => {
      emit && emit("focus", e);
    };
    const selectClass = computed(() => {
      return [
        nc.b(),
        props.size !== "default" ? nc.m(props.size) : "",
        nc.is("disabled", props.disabled),
        nc.is("focus", visible.value || filterable.value),
        nc.is("hover", hover.value)
      ];
    });
    const iconClass = computed(() => [nc.e("icon")]);
    const dropdownClass = computed(() => [nc.b("dropdown")]);
    const innerClass = computed(() => [nc.e("inner")]);
    onMounted(() => {
      window.addEventListener("click", hideMenu);
    });
    onUnmounted(() => {
      window.removeEventListener("click", hideMenu);
    });
    return (_ctx, _cache) => {
      const _component_etu_tag = resolveComponent("etu-tag");
      const _component_etu_icon = resolveComponent("etu-icon");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([...unref(selectClass)]),
        onClick: _cache[1] || (_cache[1] = withModifiers(
          //@ts-ignore
          (...args) => unref(toggleMenu) && unref(toggleMenu)(...args),
          ["stop"]
        )),
        ref_key: "select",
        ref: select,
        onMouseover: _cache[2] || (_cache[2] = withModifiers(
          //@ts-ignore
          (...args) => unref(onHover) && unref(onHover)(...args),
          ["self"]
        )),
        onMouseleave: _cache[3] || (_cache[3] = withModifiers(
          //@ts-ignore
          (...args) => unref(onUnHover) && unref(onUnHover)(...args),
          ["self"]
        ))
      }, [
        !unref(selected).length ? withDirectives((openBlock(), createElementBlock("input", {
          key: 0,
          ref: "input",
          class: normalizeClass(unref(innerClass)),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(currentLable) ? currentLable.value = $event : null),
          type: "text",
          placeholder: props.placeholder,
          disabled: !props.filterable,
          onBlur,
          onFocus
        }, null, 42, _hoisted_1)), [
          [vModelText, unref(currentLable)]
        ]) : (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(unref(nc).e("tag"))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(selected), (item) => {
            return openBlock(), createBlock(_component_etu_tag, { key: item }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(item), 1)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ], 2)),
        createElementVNode("span", {
          class: normalizeClass(unref(iconClass))
        }, [
          unref(caches).size === 0 || !unref(hover) ? (openBlock(), createBlock(_component_etu_icon, {
            key: 0,
            name: "arrow-down-bold"
          })) : (openBlock(), createBlock(_component_etu_icon, {
            key: 1,
            name: "error",
            onClick: withModifiers(unref(resetStates), ["stop"])
          }, null, 8, ["onClick"]))
        ], 2),
        createVNode(Transition, {
          "enter-active-class": "animate__animated animate__fadeIn animate__faster",
          "leave-active-class": "animate__animated animate__fadeOut animate__faster"
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              class: normalizeClass(unref(dropdownClass)),
              ref_key: "dropdown",
              ref: dropdown
            }, [
              createElementVNode("div", {
                class: normalizeClass(unref(nc).be("dropdown", "wrapper"))
              }, [
                unref(slots).default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock("span", {
                  key: 1,
                  class: normalizeClass(unref(nc).e("empty"))
                }, "暂时没有数据", 2))
              ], 2)
            ], 2), [
              [vShow, unref(visible)]
            ])
          ]),
          _: 3
        })
      ], 34);
    };
  }
});
export {
  _sfc_main as default
};
