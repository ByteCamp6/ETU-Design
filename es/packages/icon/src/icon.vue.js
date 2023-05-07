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
import { iconProps } from "./icon.js";
const __default__ = {
  name: "EtuIcon",
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const bem = useNamespace("i");
    const classes = computed(() => {
      const { name } = props;
      return [bem.b(name), bem.b()];
    });
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "i",
          {
            class: normalizeClass(unref(classes)),
          },
          [renderSlot(_ctx.$slots, "default")],
          2,
        )
      );
    };
  },
});
export { _sfc_main as default };
