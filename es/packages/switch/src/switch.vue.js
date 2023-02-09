import { defineComponent, ref, watch, computed, openBlock, createElementBlock, normalizeClass, unref, withDirectives, createElementVNode, isRef, vModelCheckbox, renderSlot, nextTick } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../utils/types.js";
import "../../hooks/use-z-index/index.js";
import "../../theme-chalk/src/switch.scss.js";
const _hoisted_1 = ["true-value", "false-value", "checked", "value", "disabled"];
const _hoisted_2 = /* @__PURE__ */ createElementVNode("div", { class: "etu-Switch-inBox" }, null, -1);
const __default__ = {
  name: "EtuSwitch"
};
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
    const bem = useNamespace("Switch");
    const isControlled = ref(typeof props.modelValue === "boolean");
    const state = ref(props.disabled);
    watch(
      () => props.modelValue,
      () => {
        isControlled.value = true;
      }
    );
    watch(
      () => props.value,
      () => {
        isControlled.value = false;
      }
    );
    const activeValue = ref(props.activeValue);
    const inactiveValue = ref(props.inactiveValue);
    const tClass = computed(() => {
      return [bem.b(), bem.bem(props.bgColor, String(props.disabled), props.size)];
    });
    computed(() => {
      return [bem.e()];
    });
    let checkedValue = ref(false);
    let demo = ref();
    let val = demo;
    const handleChange = () => {
      const v = checkedValue.value ? props.inactiveValue : props.activeValue;
      emits("change", v);
      emits("dataVal", val.value);
      nextTick(() => {
        checkedValue.value = !checkedValue.value;
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass(unref(tClass))
      }, [
        withDirectives(createElementVNode("input", {
          ref: "input",
          type: "checkbox",
          class: "RealCheck",
          "true-value": activeValue.value,
          "false-value": inactiveValue.value,
          checked: unref(checkedValue),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(demo) ? demo.value = $event : demo = $event),
          value: unref(val),
          onChange: handleChange,
          disabled: state.value
        }, null, 40, _hoisted_1), [
          [vModelCheckbox, unref(demo)]
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
