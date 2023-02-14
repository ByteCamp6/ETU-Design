import { defineComponent, inject, computed, onMounted, openBlock, createElementBlock, normalizeClass, unref, withModifiers, createElementVNode, toDisplayString } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { optionProps } from "./option.js";
import { selectKey } from "../../tokens/select.js";
const __default__ = {
  name: "EtuOption"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: optionProps,
  setup(__props) {
    const props = __props;
    const select = inject(selectKey);
    const updateValue = (value, label) => {
      if (props.disabled)
        return;
      select.handlerClickOption({ value, label });
    };
    const nc = useNamespace("select");
    const optionClass = computed(() => [
      nc.be("dropdown", "item"),
      nc.is("disabled", props.disabled),
      nc.is("selected", select.isSelected(props.value))
    ]);
    onMounted(() => {
      if (select.props.modelValue) {
        if (!select.props.multiple) {
          if (select.props.modelValue === props.value) {
            updateValue(props.value, props.label);
          }
        } else {
          if (select.props.modelValue.contains(props.value)) {
            updateValue(props.value, props.label);
          }
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(optionClass)),
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => updateValue(props.value, props.label), ["stop"]))
      }, [
        createElementVNode("span", null, toDisplayString(props.label), 1)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
