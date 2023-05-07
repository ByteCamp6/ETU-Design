import {
  defineComponent,
  resolveComponent,
  openBlock,
  createElementBlock,
  normalizeClass,
  unref,
  renderSlot,
  createBlock,
  createCommentVNode,
} from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { linkProps, linkEmits } from "./link.js";
const _hoisted_1 = ["href"];
const __default__ = defineComponent({
  name: "EtuLink",
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: linkProps,
  emits: linkEmits,
  setup(__props, { emit }) {
    const props = __props;
    const bem = useNamespace("link");
    const iconName = props.icon || "";
    console.log(iconName, "???");
    let linkKls = [
      bem.b(),
      bem.m(props.type),
      bem.is("disabled", props.disabled),
      bem.is("underline", props.underline && !props.disabled),
    ];
    function handleClick(event) {
      if (!props.disabled) emit("click", event);
    }
    return (_ctx, _cache) => {
      const _component_etu_icon = resolveComponent("etu-icon");
      return (
        openBlock(),
        createElementBlock(
          "a",
          {
            class: normalizeClass(unref(linkKls)),
            href: _ctx.disabled || !_ctx.href ? void 0 : _ctx.href,
            onClick: handleClick,
            style: { "align-items": "center" },
          },
          [
            renderSlot(_ctx.$slots, "icon"),
            unref(iconName)
              ? (openBlock(),
                createBlock(
                  _component_etu_icon,
                  {
                    key: 0,
                    name: unref(iconName),
                  },
                  null,
                  8,
                  ["name"],
                ))
              : createCommentVNode("", true),
            _ctx.$slots.default
              ? (openBlock(),
                createElementBlock(
                  "span",
                  {
                    key: 1,
                    class: normalizeClass(unref(bem).e("inner")),
                  },
                  [renderSlot(_ctx.$slots, "default")],
                  2,
                ))
              : createCommentVNode("", true),
          ],
          10,
          _hoisted_1,
        )
      );
    };
  },
});
export { _sfc_main as default };
