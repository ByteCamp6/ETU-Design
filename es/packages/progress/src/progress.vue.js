import { defineComponent, computed, resolveComponent, openBlock, createElementBlock, Fragment, createElementVNode, normalizeClass, unref, normalizeStyle, withDirectives, toDisplayString, vShow, createVNode, renderSlot } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../utils/types.js";
import "../../hooks/use-z-index/index.js";
import { progressProps } from "./progress.js";
const __default__ = {
  name: "EtuProgress"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: progressProps,
  setup(__props) {
    const props = __props;
    const progressBarOuterStyle = computed(() => {
      return { height: props.strokeWidth + "px" };
    });
    const progressBarInnerStyle = computed(() => {
      return {
        width: props.percentage + "%",
        height: props.strokeWidth + "px"
      };
    });
    const ns = useNamespace("progress");
    return (_ctx, _cache) => {
      const _component_etu_icon = resolveComponent("etu-icon");
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", {
          class: normalizeClass([unref(ns).b(), unref(ns).m(props.status)])
        }, [
          createElementVNode("div", {
            class: normalizeClass(unref(ns).b("bar"))
          }, [
            createElementVNode("div", {
              class: normalizeClass(unref(ns).be("bar", "outer")),
              style: normalizeStyle(unref(progressBarOuterStyle))
            }, [
              createElementVNode("div", {
                class: normalizeClass(unref(ns).be("bar", "inner")),
                style: normalizeStyle(unref(progressBarInnerStyle))
              }, [
                withDirectives(createElementVNode("div", {
                  class: normalizeClass(unref(ns).be("bar", "innerText"))
                }, [
                  createElementVNode("span", null, toDisplayString(props.percentage + "%"), 1)
                ], 2), [
                  [vShow, props.textInside && props.showText]
                ])
              ], 6)
            ], 6)
          ], 2),
          withDirectives(createElementVNode("div", {
            class: normalizeClass(unref(ns).e("text"))
          }, [
            withDirectives(createElementVNode("span", null, toDisplayString(props.percentage) + "%", 513), [
              [vShow, props.status === ""]
            ]),
            withDirectives(createVNode(_component_etu_icon, {
              name: "success",
              class: normalizeClass(unref(ns).e("icon"))
            }, null, 8, ["class"]), [
              [vShow, props.status === "success"]
            ]),
            withDirectives(createVNode(_component_etu_icon, {
              name: "error",
              class: normalizeClass(unref(ns).e("icon"))
            }, null, 8, ["class"]), [
              [vShow, props.status === "danger"]
            ]),
            withDirectives(createVNode(_component_etu_icon, {
              name: "prompt",
              class: normalizeClass(unref(ns).e("icon"))
            }, null, 8, ["class"]), [
              [vShow, props.status === "warning"]
            ])
          ], 2), [
            [vShow, !props.textInside && props.showText]
          ])
        ], 2),
        renderSlot(_ctx.$slots, "default")
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
