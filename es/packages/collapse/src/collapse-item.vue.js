import { defineComponent, inject, ref, computed, resolveComponent, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, toDisplayString, createVNode, withDirectives, renderSlot, vShow } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../utils/types.js";
import "../../hooks/use-z-index/index.js";
import { collapseItemProps } from "./collapse-item.js";
import { collapseKey } from "../../tokens/collapse.js";
const __default__ = {
  name: "EtuCollapseItem"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: collapseItemProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("collapse-item");
    const collapse = inject(collapseKey);
    const inner = ref(null);
    const contentToggle = () => {
      collapse.clickItem(props.name);
    };
    const isShow = computed(() => {
      return collapse.hasExit(props.name);
    });
    return (_ctx, _cache) => {
      const _component_etu_icon = resolveComponent("etu-icon");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b(), unref(ns).is("focus", unref(collapse).hasExit(props.name))])
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("title")),
          onClick: contentToggle
        }, [
          createElementVNode("span", null, toDisplayString(props.title), 1),
          createVNode(_component_etu_icon, {
            class: normalizeClass(unref(ns).e("icon")),
            name: "arrow-right-bold"
          }, null, 8, ["class"])
        ], 2),
        withDirectives(createElementVNode("div", {
          class: normalizeClass(unref(ns).e("content"))
        }, [
          createElementVNode("div", {
            class: normalizeClass(unref(ns).e("inner")),
            ref_key: "inner",
            ref: inner
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)
        ], 2), [
          [vShow, unref(isShow)]
        ])
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
