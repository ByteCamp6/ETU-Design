import { defineComponent, ref, computed, openBlock, createElementBlock, normalizeClass, unref, withDirectives, createElementVNode, isRef, vModelCheckbox, renderSlot } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import { useDisabled } from "../../hooks/use-common-props/index.js";
import { isPropAbsent } from "../../utils/types.js";
import "../../hooks/use-z-index/index.js";
import { isBoolean } from "../../../node_modules/@vueuse/shared/index.js";
const _hoisted_1 = ["true-value", "false-value", "disabled"];
const _hoisted_2 = /* @__PURE__ */ createElementVNode("div", { class: "etu-Switch-inBox" }, null, -1);
const __default__ = defineComponent({
  name: "EtuSwitch"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const bem = useNamespace("Switch");
    const innerValue = ref(false);
    const valueBridge = computed({
      get() {
        return !isPropAbsent(props.modelValue) ? props.modelValue : innerValue.value;
      },
      set(v) {
        emits("change", v);
        emits("update:modelValue", v);
        innerValue.value = v;
      }
    });
    const isCheck = computed(() => {
      if (isBoolean(valueBridge.value)) {
        return valueBridge.value;
      } else {
        return props.activeValue === valueBridge.value;
      }
    });
    const isDisabled = useDisabled();
    const tClass = computed(() => {
      return [
        bem.b(),
        bem.bem(props.bgColor, String(isDisabled.value), props.size),
        bem.is("checked", isCheck.value)
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass(unref(tClass))
      }, [
        withDirectives(createElementVNode("input", {
          type: "checkbox",
          class: "RealCheck",
          "true-value": __props.activeValue,
          "false-value": __props.inactiveValue,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(valueBridge) ? valueBridge.value = $event : null),
          disabled: unref(isDisabled)
        }, null, 8, _hoisted_1), [
          [vModelCheckbox, unref(valueBridge)]
        ]),
        _hoisted_2,
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
