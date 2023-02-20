"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const dropdownItem = require("./dropdown-item.js");
const dropdown = require("../../tokens/dropdown.js");
const useDropdownItemStatus = require("./use-dropdown-item-status.js");
const __default__ = vue.defineComponent({
  name: "EtuDropdownItem"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: dropdownItem.dropdownItemProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = index.useNamespace("dropdown");
    const { isDisabled } = useDropdownItemStatus.useDropDownItemStatus(props);
    const dropdownItemCls = [ns.b("item"), ns.is("disabled", isDisabled.value)];
    const liCls = [ns.bm("item", "divided")];
    const { handleMousedown } = vue.inject(dropdown.dropdownKey, void 0);
    const handleMousedownitem = function(e) {
      if (isDisabled.value)
        return;
      handleMousedown.call(this, props.command, e);
    };
    expose({
      isDisabled
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
        _ctx.divided ? (vue.openBlock(), vue.createElementBlock("li", vue.mergeProps({
          key: 0,
          role: "separator",
          class: liCls
        }, _ctx.$attrs), null, 16)) : vue.createCommentVNode("", true),
        vue.createElementVNode("li", {
          class: vue.normalizeClass(dropdownItemCls),
          onClick: handleMousedownitem
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ])
      ], 64);
    };
  }
});
module.exports = _sfc_main;
