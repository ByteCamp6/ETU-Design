"use strict";
const vue = require("vue");
const checkboxGroup = require("./checkbox-group.js");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const checkbox = require("../../tokens/checkbox.js");
const __default__ = vue.defineComponent({
  name: "EtuCheckboxGroup"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: checkboxGroup.checkboxGroupProps,
  emits: checkboxGroup.checkboxGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = index.useNamespace("checkbox");
    const changeEvent = async (value) => {
      emit("update:modelValue", value);
      await vue.nextTick();
      emit("change", value);
    };
    const modelValue = vue.computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        changeEvent(val);
      }
    });
    vue.provide(checkbox.checkboxGroupContextKey, {
      ...vue.toRefs(props),
      modelValue,
      changeEvent
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(ns).b("group"))
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
module.exports = _sfc_main;
