"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const datePicker = require("./date-picker.js");
const useDatePicker = require("./useDatePicker.js");
const dataPicker = require("../../tokens/data-picker.js");
const dateNav_vue_vue_type_script_setup_true_lang = require("./date-picker-com/date-nav.vue.js");
const dateTable_vue_vue_type_script_setup_true_lang = require("./date-picker-com/date-table.vue.js");
const monthTable_vue_vue_type_script_setup_true_lang = require("./date-picker-com/month-table.vue.js");
const yearTable_vue_vue_type_script_setup_true_lang = require("./date-picker-com/year-table.vue.js");
const _hoisted_1 = { key: 1 };
const __default__ = {
  name: "EtuDatePicker"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: datePicker.datePickerProps,
  emits: datePicker.datePickerEmits,
  setup(__props, { emit }) {
    const props = __props;
    console.log(props.modelValue);
    const states = useDatePicker.useDatePickerStates(props);
    const datePicker2 = useDatePicker.useDatePicker(states, props, emit);
    const ns = index.useNamespace("date-picker");
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
    } = vue.toRefs(states);
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
    } = datePicker2;
    const component = vue.shallowRef(dateTable_vue_vue_type_script_setup_true_lang);
    vue.provide(
      dataPicker.datePickerKey,
      vue.reactive({
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
    const dpClass = vue.computed(() => {
      return [ns.b(), ns.is("range", range.value), ns.is("focus", visible.value)];
    });
    const compChange = () => {
      switch (type.value) {
        case "date":
          component.value = dateTable_vue_vue_type_script_setup_true_lang;
          break;
        case "month":
          component.value = monthTable_vue_vue_type_script_setup_true_lang;
          break;
        case "year":
          component.value = yearTable_vue_vue_type_script_setup_true_lang;
          break;
      }
    };
    vue.watch(() => type.value, compChange);
    vue.onMounted(() => {
      window.addEventListener("click", hideMenu);
    });
    vue.onUnmounted(() => {
      window.removeEventListener("click", hideMenu);
    });
    init();
    compChange();
    return (_ctx, _cache) => {
      const _component_etu_input = vue.resolveComponent("etu-input");
      const _component_etu_icon = vue.resolveComponent("etu-icon");
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(dpClass))
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(vue.unref(ns).e("wrap")),
          onClick: _cache[3] || (_cache[3] = vue.withModifiers(
            //@ts-ignore
            (...args) => vue.unref(toggleMenu) && vue.unref(toggleMenu)(...args),
            ["stop"]
          ))
        }, [
          !vue.unref(range) ? (vue.openBlock(), vue.createBlock(_component_etu_input, {
            key: 0,
            suffixIcon: "calendar",
            placeholder: "Pick a day",
            modelValue: vue.unref(currentLabel),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(currentLabel) ? currentLabel.value = $event : null)
          }, null, 8, ["modelValue"])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
            vue.createVNode(_component_etu_icon, { name: "calendar" }),
            vue.withDirectives(vue.createElementVNode("input", {
              class: vue.normalizeClass(vue.unref(ns).e("input")),
              placeholder: "Pick a day",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.isRef(startLabel) ? startLabel.value = $event : null)
            }, null, 2), [
              [vue.vModelText, vue.unref(startLabel)]
            ]),
            vue.createTextVNode(" To "),
            vue.withDirectives(vue.createElementVNode("input", {
              class: vue.normalizeClass(vue.unref(ns).e("input")),
              placeholder: "Pick a day",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.isRef(endLabel) ? endLabel.value = $event : null)
            }, null, 2), [
              [vue.vModelText, vue.unref(endLabel)]
            ])
          ]))
        ], 2),
        vue.createVNode(vue.Transition, {
          "enter-active-class": "animate__animated animate__fadeIn animate__faster",
          "leave-active-class": "animate__animated animate__fadeOut animate__faster"
        }, {
          default: vue.withCtx(() => [
            !vue.unref(range) ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: vue.normalizeClass(vue.unref(ns).e("dropdown"))
            }, [
              vue.createVNode(dateNav_vue_vue_type_script_setup_true_lang, {
                value: vue.unref(value),
                model: vue.unref(model)
              }, null, 8, ["value", "model"]),
              vue.createElementVNode("div", {
                class: vue.normalizeClass(vue.unref(ns).e("content"))
              }, [
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(component)), {
                  value: vue.unref(value),
                  model: vue.unref(model)
                }, null, 8, ["value", "model"]))
              ], 2)
            ], 2)), [
              [vue.vShow, vue.unref(visible)]
            ]) : vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
              key: 1,
              class: vue.normalizeClass([vue.unref(ns).e("dropdown"), vue.unref(ns).em("dropdown", "range")])
            }, [
              vue.createElementVNode("div", {
                class: vue.normalizeClass(vue.unref(ns).e("dropdown-wrap"))
              }, [
                vue.createVNode(dateNav_vue_vue_type_script_setup_true_lang, {
                  right: false,
                  value: vue.unref(value)[0],
                  model: vue.unref(model)[0],
                  index: 0
                }, null, 8, ["value", "model"]),
                vue.createElementVNode("div", {
                  class: vue.normalizeClass(vue.unref(ns).e("content"))
                }, [
                  (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(component)), {
                    value: vue.unref(value)[0],
                    model: vue.unref(model)[0],
                    index: 0
                  }, null, 8, ["value", "model"]))
                ], 2)
              ], 2),
              vue.createElementVNode("div", {
                class: vue.normalizeClass(vue.unref(ns).e("dropdown-wrap"))
              }, [
                vue.createVNode(dateNav_vue_vue_type_script_setup_true_lang, {
                  left: false,
                  value: vue.unref(value)[1],
                  model: vue.unref(model)[1],
                  index: 1
                }, null, 8, ["value", "model"]),
                vue.createElementVNode("div", {
                  class: vue.normalizeClass(vue.unref(ns).e("content"))
                }, [
                  (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(component)), {
                    value: vue.unref(value)[1],
                    model: vue.unref(model)[1],
                    index: 1
                  }, null, 8, ["value", "model"]))
                ], 2)
              ], 2)
            ], 2)), [
              [vue.vShow, vue.unref(visible)]
            ])
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
module.exports = _sfc_main;
