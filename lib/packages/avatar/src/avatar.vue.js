"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const avatar = require("./avatar.js");
const _hoisted_1 = ["src", "srcset", "alt"];
const __default__ = {
  name: "EtuAvatar"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: avatar.avatarProps,
  emits: avatar.avatarEmits,
  setup(__props, { emit }) {
    const props = __props;
    const avatarStyle = vue.computed(() => {
      return {
        "--etu-avatar-size": props.size + "px"
      };
    });
    const imgStyle = vue.computed(() => {
      return {
        "object-fit": props.fit
      };
    });
    function handleError(e) {
      emit("error", e);
    }
    const ns = index.useNamespace("avatar");
    return (_ctx, _cache) => {
      const _component_etu_icon = vue.resolveComponent("etu-icon");
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([vue.unref(ns).b(), vue.unref(ns).e(props.shape)]),
        style: vue.normalizeStyle(vue.unref(avatarStyle))
      }, [
        props.icon ? (vue.openBlock(), vue.createBlock(_component_etu_icon, {
          key: 0,
          class: vue.normalizeClass(vue.unref(ns).e("icon")),
          name: props.icon
        }, null, 8, ["class", "name"])) : props.src ? (vue.openBlock(), vue.createElementBlock("img", {
          key: 1,
          src: props.src,
          srcset: props.srcSet,
          alt: props.alt,
          style: vue.normalizeStyle(vue.unref(imgStyle)),
          onError: handleError
        }, null, 44, _hoisted_1)) : vue.renderSlot(_ctx.$slots, "default", { key: 2 })
      ], 6);
    };
  }
});
module.exports = _sfc_main;
