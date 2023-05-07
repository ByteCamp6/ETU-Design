import {
  defineComponent,
  inject,
  openBlock,
  createElementBlock,
  Fragment,
  mergeProps,
  createCommentVNode,
  createElementVNode,
  normalizeClass,
  renderSlot,
} from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { dropdownItemProps } from "./dropdown-item.js";
import { dropdownKey } from "../../tokens/dropdown.js";
import { useDropDownItemStatus } from "./use-dropdown-item-status.js";
const __default__ = defineComponent({
  name: "EtuDropdownItem",
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: dropdownItemProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("dropdown");
    const { isDisabled } = useDropDownItemStatus(props);
    const dropdownItemCls = [ns.b("item"), ns.is("disabled", isDisabled.value)];
    const liCls = [ns.bm("item", "divided")];
    const { handleMousedown } = inject(dropdownKey, void 0);
    const handleMousedownitem = function (e) {
      if (isDisabled.value) return;
      handleMousedown.call(this, props.command, e);
    };
    expose({
      isDisabled,
    });
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          Fragment,
          null,
          [
            _ctx.divided
              ? (openBlock(),
                createElementBlock(
                  "li",
                  mergeProps(
                    {
                      key: 0,
                      role: "separator",
                      class: liCls,
                    },
                    _ctx.$attrs,
                  ),
                  null,
                  16,
                ))
              : createCommentVNode("", true),
            createElementVNode(
              "li",
              {
                class: normalizeClass(dropdownItemCls),
                onClick: handleMousedownitem,
              },
              [renderSlot(_ctx.$slots, "default")],
            ),
          ],
          64,
        )
      );
    };
  },
});
export { _sfc_main as default };
