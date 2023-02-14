"use strict";
const vue = require("vue");
const radio = require("../../tokens/radio.js");
const radioGroup = require("./radio-group.js");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const __default__ = vue.defineComponent({
  name: "EtuRadioGroup"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: radioGroup.radioGroupProps,
  emits: radioGroup.radioGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = index.useNamespace("radio");
    const changeEvent = (value) => {
      emit("update:modelValue", value);
      vue.nextTick(() => emit("change", value));
    };
    vue.provide(radio.radioGroupKey, {
      ...vue.toRefs(props),
      changeEvent
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(ns).b("group")),
        role: "radiogroup"
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
module.exports = _sfc_main;
