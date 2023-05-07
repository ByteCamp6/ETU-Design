import {
  defineComponent,
  computed,
  openBlock,
  createElementBlock,
  normalizeClass,
  unref,
  renderSlot,
} from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
const __default__ = defineComponent({
  name: "EtuMenuItem",
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    mode: {
      type: String,
      default: "vertical",
    },
    collapse: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: "inherit",
    },
    textColor: {
      type: String,
      default: "inherit",
    },
    defaultActive: {
      type: String,
      default: "",
    },
    menuTrigger: {
      type: String,
      default: "hover",
    },
    disabled: {
      type: String,
      default: "false",
    },
    component: {
      type: String,
      default: null,
    },
  },
  emits: ["click"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const bem = useNamespace("menuItem");
    const tClass = computed(() => {
      return [
        bem.e(props.disabled),
        bem.bem(props.menuTrigger, props.bgColor, props.textColor),
      ];
    });
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "div",
          {
            class: normalizeClass(unref(tClass)),
            onClick:
              _cache[0] ||
              (_cache[0] = //@ts-ignore
                (...args) => _ctx.handleClick && _ctx.handleClick(...args)),
          },
          [renderSlot(_ctx.$slots, "default")],
          2,
        )
      );
    };
  },
});
export { _sfc_main as default };
