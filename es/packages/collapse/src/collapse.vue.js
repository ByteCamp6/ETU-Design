import {
  defineComponent,
  reactive,
  provide,
  openBlock,
  createElementBlock,
  normalizeClass,
  unref,
  renderSlot,
} from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { collapseProps, collapseEmits } from "./collapse.js";
import { collapseKey } from "../../tokens/collapse.js";
const __default__ = {
  name: "EtuCollapse",
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: collapseProps,
  emits: collapseEmits,
  setup(__props, { emit }) {
    const props = __props;
    const currentItem = reactive(/* @__PURE__ */ new Map());
    const hasExit = (name) => {
      return currentItem.has(name);
    };
    const clickItem = (name) => {
      emit("change", name);
      if (currentItem.has(name)) {
        currentItem.delete(name);
        return;
      }
      if (props.accordion) {
        currentItem.clear();
      }
      currentItem.set(name, 1);
    };
    provide(collapseKey, reactive({ clickItem, currentItem, hasExit }));
    const ns = useNamespace("collapse");
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "div",
          {
            class: normalizeClass(unref(ns).b()),
          },
          [renderSlot(_ctx.$slots, "default")],
          2,
        )
      );
    };
  },
});
export { _sfc_main as default };
