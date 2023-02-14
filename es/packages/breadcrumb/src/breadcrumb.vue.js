import { defineComponent, provide, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { breadcrumbProps } from "./breadcrumb.js";
import { breadcrumbKey } from "../../tokens/breadcrumb.js";
const __default__ = {
  name: "EtuBreadcrumb"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: breadcrumbProps,
  setup(__props) {
    const props = __props;
    const bem = useNamespace("breadcrumb");
    provide(breadcrumbKey, props);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref: "breadcrumb",
        class: normalizeClass(unref(bem).b())
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
