import { defineComponent, inject, getCurrentInstance, toRefs, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, renderSlot, toDisplayString } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { breadcrumbKey } from "../../tokens/breadcrumb.js";
import { breadcrumbItemProps } from "./breadcrumb-item.js";
const __default__ = {
  name: "EtuBreadcrumbItem"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: breadcrumbItemProps,
  setup(__props) {
    const props = __props;
    console.log(props);
    const bem = useNamespace("breadcrumb");
    const breadcrumbContext = inject(breadcrumbKey, void 0);
    const instance = getCurrentInstance();
    const { separator } = toRefs(breadcrumbContext);
    const router = instance.appContext.config.globalProperties.$router;
    const onClick = () => {
      if (props.to === void 0 || props.to === "")
        return;
      props.replace ? router.replace(props.to) : router.push(props.to);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(bem).e("item"))
      }, [
        createElementVNode("span", {
          class: normalizeClass([unref(bem).e("inner"), unref(bem).is("link", !!props.to)]),
          onClick
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        createElementVNode("span", {
          class: normalizeClass(unref(bem).e("separator"))
        }, toDisplayString(unref(separator)), 3)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
