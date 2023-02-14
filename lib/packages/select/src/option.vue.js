"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const option = require("./option.js");
const select = require("../../tokens/select.js");
const __default__ = {
  name: "EtuOption"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: option.optionProps,
  setup(__props) {
    const props = __props;
    const select$1 = vue.inject(select.selectKey);
    const updateValue = (value, label) => {
      if (props.disabled)
        return;
      select$1.handlerClickOption({ value, label });
    };
    const nc = index.useNamespace("select");
    const optionClass = vue.computed(() => [
      nc.be("dropdown", "item"),
      nc.is("disabled", props.disabled),
      nc.is("selected", select$1.isSelected(props.value))
    ]);
    vue.onMounted(() => {
      if (select$1.props.modelValue) {
        if (!select$1.props.multiple) {
          if (select$1.props.modelValue === props.value) {
            updateValue(props.value, props.label);
          }
        } else {
          if (select$1.props.modelValue.contains(props.value)) {
            updateValue(props.value, props.label);
          }
        }
      }
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(optionClass)),
        onClick: _cache[0] || (_cache[0] = vue.withModifiers(($event) => updateValue(props.value, props.label), ["stop"]))
      }, [
        vue.createElementVNode("span", null, vue.toDisplayString(props.label), 1)
      ], 2);
    };
  }
});
module.exports = _sfc_main;
