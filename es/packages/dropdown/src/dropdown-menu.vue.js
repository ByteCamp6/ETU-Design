import { defineComponent, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
const __default__ = defineComponent({
  name: "EtuDropdownMenu"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const ns = useNamespace("dropdown");
    const dropdownMenuCls = [ns.b("menu")];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", {
        class: normalizeClass(dropdownMenuCls)
      }, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
export {
  _sfc_main as default
};
