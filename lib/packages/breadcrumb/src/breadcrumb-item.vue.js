"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const breadcrumb = require("../../tokens/breadcrumb.js");
const breadcrumbItem = require("./breadcrumb-item.js");
const __default__ = {
  name: "EtuBreadcrumbItem"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: breadcrumbItem.breadcrumbItemProps,
  setup(__props) {
    const props = __props;
    console.log(props);
    const bem = index.useNamespace("breadcrumb");
    const breadcrumbContext = vue.inject(breadcrumb.breadcrumbKey, void 0);
    const instance = vue.getCurrentInstance();
    const { separator } = vue.toRefs(breadcrumbContext);
    const router = instance.appContext.config.globalProperties.$router;
    const onClick = () => {
      if (props.to === void 0 || props.to === "")
        return;
      props.replace ? router.replace(props.to) : router.push(props.to);
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("span", {
        class: vue.normalizeClass(vue.unref(bem).e("item"))
      }, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass([vue.unref(bem).e("inner"), vue.unref(bem).is("link", !!props.to)]),
          onClick
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2),
        vue.createElementVNode("span", {
          class: vue.normalizeClass(vue.unref(bem).e("separator"))
        }, vue.toDisplayString(vue.unref(separator)), 3)
      ], 2);
    };
  }
});
module.exports = _sfc_main;
