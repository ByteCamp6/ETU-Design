import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { colProps } from "./col.js";
const __default__ = {
  name: "EtuCol"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: colProps,
  setup(__props) {
    const props = __props;
    const bem = useNamespace("col");
    let colClassName = computed(() => {
      let temp = bem.b();
      let className = [];
      props.span !== 0 ? className.push(`${temp}-${props.span}`) : "";
      props.offset !== 0 ? className.push(`${temp}-offset-${props.offset}`) : "";
      return className;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(colClassName))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
