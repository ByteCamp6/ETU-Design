"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
const index$2 = require("../../hooks/use-common-props/index.js");
const types = require("../../utils/types.js");
require("../../hooks/use-z-index/index.js");
const index$1 = require("../../../node_modules/@vueuse/shared/index.js");
const _hoisted_1 = ["true-value", "false-value", "disabled"];
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("div", { class: "etu-Switch-inBox" }, null, -1);
const __default__ = vue.defineComponent({
  name: "EtuSwitch"
});
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
      default: null
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
  emits: ["change", "update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const bem = index.useNamespace("Switch");
    const innerValue = vue.ref(false);
    const valueBridge = vue.computed({
      get() {
        return !types.isPropAbsent(props.modelValue) ? props.modelValue : innerValue.value;
      },
      set(v) {
        emits("change", v);
        emits("update:modelValue", v);
        innerValue.value = v;
      }
    });
    const isCheck = vue.computed(() => {
      if (index$1.isBoolean(valueBridge.value)) {
        return valueBridge.value;
      } else {
        return props.activeValue === valueBridge.value;
      }
    });
    const isDisabled = index$2.useDisabled();
    const tClass = vue.computed(() => {
      return [
        bem.b(),
        bem.bem(props.bgColor, String(isDisabled.value), props.size),
        bem.is("checked", isCheck.value)
      ];
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("label", {
        class: vue.normalizeClass(vue.unref(tClass))
      }, [
        vue.withDirectives(vue.createElementVNode("input", {
          type: "checkbox",
          class: "RealCheck",
          "true-value": __props.activeValue,
          "false-value": __props.inactiveValue,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(valueBridge) ? valueBridge.value = $event : null),
          disabled: vue.unref(isDisabled)
        }, null, 8, _hoisted_1), [
          [vue.vModelCheckbox, vue.unref(valueBridge)]
        ]),
        _hoisted_2,
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
module.exports = _sfc_main;
