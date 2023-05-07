"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
const types = require("../../utils/types.js");
require("../../hooks/use-z-index/index.js");
const divider = require("./divider.js");
const __default__ = {
  name: "EtuDivider",
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: divider.dividerProps,
  setup(__props) {
    const props = __props;
    const bem = index.useNamespace("divider");
    const style = vue.computed(() => {
      return {
        "--border-style": types.isUndefined(props.borderStyle)
          ? "solid"
          : props.borderStyle,
      };
    });
    return (_ctx, _cache) => {
      return (
        vue.openBlock(),
        vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass([
              vue.unref(bem).b(),
              vue.unref(bem).m(props.direction),
            ]),
            style: vue.normalizeStyle(vue.unref(style)),
          },
          [
            _ctx.$slots.default && props.direction !== "vertical"
              ? (vue.openBlock(),
                vue.createElementBlock(
                  "span",
                  {
                    key: 0,
                    class: vue.normalizeClass([
                      vue.unref(bem).e("text"),
                      vue.unref(bem).is(props.contentPosition),
                    ]),
                  },
                  [vue.renderSlot(_ctx.$slots, "default")],
                  2,
                ))
              : vue.createCommentVNode("", true),
          ],
          6,
        )
      );
    };
  },
});
module.exports = _sfc_main;
