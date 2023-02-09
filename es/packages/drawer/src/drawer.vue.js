import { defineComponent, ref, computed, withDirectives, openBlock, createBlock, unref, withCtx, createElementVNode, normalizeClass, createVNode, toDisplayString, renderSlot, vShow } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../utils/types.js";
import { useVmodel } from "../../hooks/use-vmodel/index.js";
import "../../hooks/use-z-index/index.js";
import "../../icon/index.js";
import "../../overlay/index.js";
import _sfc_main$1 from "../../overlay/src/overlay.vue.js";
import _sfc_main$2 from "../../icon/src/icon.vue.js";
const __default__ = defineComponent({
  name: "EtuDrawer"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const Tittle = ref(props.Tittle);
    const bem = useNamespace("Drawer");
    const tClass = computed(() => {
      return [
        bem.b(),
        bem.bem(props.bgColor, String(props.disabled), props.direction)
      ];
    });
    const isShow = useVmodel(props);
    function changeIsShow() {
      isShow.value = !isShow.value;
    }
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createBlock(unref(_sfc_main$1), { onClick: changeIsShow }, {
        default: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(unref(tClass))
          }, [
            createElementVNode("div", {
              class: "close_Icon",
              onClick: changeIsShow
            }, [
              createVNode(unref(_sfc_main$2), { name: "close" })
            ]),
            createElementVNode("h1", null, toDisplayString(Tittle.value), 1),
            createElementVNode("div", null, [
              renderSlot(_ctx.$slots, "default")
            ])
          ], 2)
        ]),
        _: 3
      }, 512)), [
        [vShow, unref(isShow)]
      ]);
    };
  }
});
export {
  _sfc_main as default
};
