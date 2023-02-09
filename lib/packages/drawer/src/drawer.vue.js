"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../utils/types.js");
const index$1 = require("../../hooks/use-vmodel/index.js");
require("../../hooks/use-z-index/index.js");
require("../../icon/index.js");
require("../../overlay/index.js");
const overlay_vue_vue_type_script_setup_true_name_EtuOverlay_lang = require("../../overlay/src/overlay.vue.js");
const icon_vue_vue_type_script_setup_true_lang = require("../../icon/src/icon.vue.js");
const __default__ = vue.defineComponent({
  name: "EtuDrawer"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: {
      size: String,
      default: "normal"
    },
    bgColor: {
      bgColor: String,
      default: "white"
    },
    modelValue: {
      type: [Boolean],
      default: false
    },
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    direction: {
      type: String,
      default: "Right"
    },
    name: {
      type: String,
      default: ""
    },
    Tittle: {
      type: String,
      default: "标题"
    }
  },
  setup(__props) {
    const props = __props;
    const Tittle = vue.ref(props.Tittle);
    const bem = index.useNamespace("Drawer");
    const tClass = vue.computed(() => {
      return [
        bem.b(),
        bem.bem(props.bgColor, String(props.disabled), props.direction)
      ];
    });
    const isShow = index$1.useVmodel(props);
    function changeIsShow() {
      isShow.value = !isShow.value;
    }
    return (_ctx, _cache) => {
      return vue.withDirectives((vue.openBlock(), vue.createBlock(vue.unref(overlay_vue_vue_type_script_setup_true_name_EtuOverlay_lang), { onClick: changeIsShow }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(vue.unref(tClass))
          }, [
            vue.createElementVNode("div", {
              class: "close_Icon",
              onClick: changeIsShow
            }, [
              vue.createVNode(vue.unref(icon_vue_vue_type_script_setup_true_lang), { name: "close" })
            ]),
            vue.createElementVNode("h1", null, vue.toDisplayString(Tittle.value), 1),
            vue.createElementVNode("div", null, [
              vue.renderSlot(_ctx.$slots, "default")
            ])
          ], 2)
        ]),
        _: 3
      }, 512)), [
        [vue.vShow, vue.unref(isShow)]
      ]);
    };
  }
});
module.exports = _sfc_main;
