"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
require("../../theme-chalk/src/switch.scss.js");
const _hoisted_1 = ["true-value", "false-value", "checked", "value", "disabled"];
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("div", { class: "etu-Switch-inBox" }, null, -1);
const __default__ = {
  name: "EtuSwitch"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: {
      size: String,
      default: "normal"
    },
    bgColor: {
      bgColor: String,
      default: "dodgerblue"
    },
    modelValue: {
      type: [Boolean, String, Number],
      default: false
    },
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    name: {
      type: String,
      default: ""
    }
  },
  emits: ["change", "dataVal"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const bem = index.useNamespace("Switch");
    const isControlled = vue.ref(typeof props.modelValue === "boolean");
    const state = vue.ref(props.disabled);
    vue.watch(
      () => props.modelValue,
      () => {
        isControlled.value = true;
      }
    );
    vue.watch(
      () => props.value,
      () => {
        isControlled.value = false;
      }
    );
    const activeValue = vue.ref(props.activeValue);
    const inactiveValue = vue.ref(props.inactiveValue);
    const tClass = vue.computed(() => {
      return [bem.b(), bem.bem(props.bgColor, String(props.disabled), props.size)];
    });
    vue.computed(() => {
      return [bem.e()];
    });
    let checkedValue = vue.ref(false);
    let demo = vue.ref();
    let val = demo;
    const handleChange = () => {
      const v = checkedValue.value ? props.inactiveValue : props.activeValue;
      emits("change", v);
      emits("dataVal", val.value);
      vue.nextTick(() => {
        checkedValue.value = !checkedValue.value;
      });
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("label", {
        class: vue.normalizeClass(vue.unref(tClass))
      }, [
        vue.withDirectives(vue.createElementVNode("input", {
          ref: "input",
          type: "checkbox",
          class: "RealCheck",
          "true-value": activeValue.value,
          "false-value": inactiveValue.value,
          checked: vue.unref(checkedValue),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(demo) ? demo.value = $event : demo = $event),
          value: vue.unref(val),
          onChange: handleChange,
          disabled: state.value
        }, null, 40, _hoisted_1), [
          [vue.vModelCheckbox, vue.unref(demo)]
        ]),
        _hoisted_2,
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
module.exports = _sfc_main;
