import { defineComponent, toRefs, shallowRef, provide, reactive, computed, watch, onMounted, onUnmounted, resolveComponent, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, withModifiers, createBlock, isRef, createVNode, withDirectives, vModelText, createTextVNode, Transition, withCtx, resolveDynamicComponent, vShow } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { datePickerProps, datePickerEmits } from "./date-picker.js";
import { useDatePickerStates, useDatePicker } from "./useDatePicker.js";
import { datePickerKey } from "../../tokens/data-picker.js";
import _sfc_main$2 from "./date-picker-com/date-nav.vue.js";
import _sfc_main$1 from "./date-picker-com/date-table.vue.js";
import _sfc_main$4 from "./date-picker-com/month-table.vue.js";
import _sfc_main$3 from "./date-picker-com/year-table.vue.js";
const _hoisted_1 = { key: 1 };
const __default__ = {
  name: "EtuDatePicker"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: datePickerProps,
  emits: datePickerEmits,
  setup(__props, { emit }) {
    const props = __props;
    console.log(props.modelValue);
    const states = useDatePickerStates(props);
    const datePicker = useDatePicker(states, props, emit);
    const ns = useNamespace("date-picker");
    const {
      type,
      model,
      value,
      range,
      currentLabel,
      startLabel,
      endLabel,
      visible,
      selected
    } = toRefs(states);
    const {
      dateSubtract,
      dateAdd,
      monthAdd,
      yearAdd,
      monthSubtract,
      yearSubtract,
      setDay,
      setMonth,
      setYear,
      getDay,
      getMonth,
      getYear,
      changeType,
      init,
      toggleMenu,
      hideMenu
    } = datePicker;
    const component = shallowRef(_sfc_main$1);
    provide(
      datePickerKey,
      reactive({
        type: props.type,
        date: value,
        originDate: model,
        selected,
        setDay,
        setMonth,
        setYear,
        getDay,
        getMonth,
        getYear,
        changeType,
        dateSubtract,
        dateAdd,
        monthAdd,
        yearAdd,
        monthSubtract,
        yearSubtract
      })
    );
    const dpClass = computed(() => {
      return [ns.b(), ns.is("range", range.value), ns.is("focus", visible.value)];
    });
    const compChange = () => {
      switch (type.value) {
        case "date":
          component.value = _sfc_main$1;
          break;
        case "month":
          component.value = _sfc_main$4;
          break;
        case "year":
          component.value = _sfc_main$3;
          break;
      }
    };
    watch(() => type.value, compChange);
    onMounted(() => {
      window.addEventListener("click", hideMenu);
    });
    onUnmounted(() => {
      window.removeEventListener("click", hideMenu);
    });
    init();
    compChange();
    return (_ctx, _cache) => {
      const _component_etu_input = resolveComponent("etu-input");
      const _component_etu_icon = resolveComponent("etu-icon");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(dpClass))
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("wrap")),
          onClick: _cache[3] || (_cache[3] = withModifiers(
            //@ts-ignore
            (...args) => unref(toggleMenu) && unref(toggleMenu)(...args),
            ["stop"]
          ))
        }, [
          !unref(range) ? (openBlock(), createBlock(_component_etu_input, {
            key: 0,
            suffixIcon: "calendar",
            placeholder: "Pick a day",
            modelValue: unref(currentLabel),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(currentLabel) ? currentLabel.value = $event : null)
          }, null, 8, ["modelValue"])) : (openBlock(), createElementBlock("div", _hoisted_1, [
            createVNode(_component_etu_icon, { name: "calendar" }),
            withDirectives(createElementVNode("input", {
              class: normalizeClass(unref(ns).e("input")),
              placeholder: "Pick a day",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(startLabel) ? startLabel.value = $event : null)
            }, null, 2), [
              [vModelText, unref(startLabel)]
            ]),
            createTextVNode(" To "),
            withDirectives(createElementVNode("input", {
              class: normalizeClass(unref(ns).e("input")),
              placeholder: "Pick a day",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(endLabel) ? endLabel.value = $event : null)
            }, null, 2), [
              [vModelText, unref(endLabel)]
            ])
          ]))
        ], 2),
        createVNode(Transition, {
          "enter-active-class": "animate__animated animate__fadeIn animate__faster",
          "leave-active-class": "animate__animated animate__fadeOut animate__faster"
        }, {
          default: withCtx(() => [
            !unref(range) ? withDirectives((openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(unref(ns).e("dropdown"))
            }, [
              createVNode(_sfc_main$2, {
                value: unref(value),
                model: unref(model)
              }, null, 8, ["value", "model"]),
              createElementVNode("div", {
                class: normalizeClass(unref(ns).e("content"))
              }, [
                (openBlock(), createBlock(resolveDynamicComponent(unref(component)), {
                  value: unref(value),
                  model: unref(model)
                }, null, 8, ["value", "model"]))
              ], 2)
            ], 2)), [
              [vShow, unref(visible)]
            ]) : withDirectives((openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass([unref(ns).e("dropdown"), unref(ns).em("dropdown", "range")])
            }, [
              createElementVNode("div", {
                class: normalizeClass(unref(ns).e("dropdown-wrap"))
              }, [
                createVNode(_sfc_main$2, {
                  right: false,
                  value: unref(value)[0],
                  model: unref(model)[0],
                  index: 0
                }, null, 8, ["value", "model"]),
                createElementVNode("div", {
                  class: normalizeClass(unref(ns).e("content"))
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(component)), {
                    value: unref(value)[0],
                    model: unref(model)[0],
                    index: 0
                  }, null, 8, ["value", "model"]))
                ], 2)
              ], 2),
              createElementVNode("div", {
                class: normalizeClass(unref(ns).e("dropdown-wrap"))
              }, [
                createVNode(_sfc_main$2, {
                  left: false,
                  value: unref(value)[1],
                  model: unref(model)[1],
                  index: 1
                }, null, 8, ["value", "model"]),
                createElementVNode("div", {
                  class: normalizeClass(unref(ns).e("content"))
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(component)), {
                    value: unref(value)[1],
                    model: unref(model)[1],
                    index: 1
                  }, null, 8, ["value", "model"]))
                ], 2)
              ], 2)
            ], 2)), [
              [vShow, unref(visible)]
            ])
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
