import {
  defineComponent,
  inject,
  computed,
  onMounted,
  withDirectives,
  openBlock,
  createElementBlock,
  normalizeClass,
  unref,
  withModifiers,
  createElementVNode,
  toDisplayString,
  vShow,
} from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { optionProps } from "./option.js";
import { selectKey } from "../../tokens/select.js";
const __default__ = {
  name: "EtuOption",
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: optionProps,
  setup(__props) {
    const props = __props;
    const select = inject(selectKey);
    if (!props.disabled) {
      select.addValue(props.label);
    }
    const updateValue = (value, label) => {
      if (props.disabled) return;
      select.handlerClickOption({ value, label });
    };
    const nc = useNamespace("select");
    const optionClass = computed(() => [
      nc.be("dropdown", "item"),
      nc.is("disabled", props.disabled),
      nc.is("selected", select.isSelected(props.value)),
    ]);
    onMounted(() => {
      if (select.props.modelValue && !select.props.multiple) {
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
      return withDirectives(
        (openBlock(),
        createElementBlock(
          "div",
          {
            class: normalizeClass(unref(optionClass)),
            onClick:
              _cache[0] ||
              (_cache[0] = withModifiers(
                ($event) => updateValue(props.value, props.label),
                ["stop"],
              )),
          },
          [createElementVNode("span", null, toDisplayString(props.label), 1)],
          2,
        )),
        [[vShow, unref(select).isShow(props.label)]],
      );
    };
  },
});
export { _sfc_main as default };
