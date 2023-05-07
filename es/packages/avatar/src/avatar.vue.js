import {
  defineComponent,
  computed,
  resolveComponent,
  openBlock,
  createElementBlock,
  normalizeClass,
  unref,
  normalizeStyle,
  createBlock,
  renderSlot,
} from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { avatarProps, avatarEmits } from "./avatar.js";
const _hoisted_1 = ["src", "srcset", "alt"];
const __default__ = {
  name: "EtuAvatar",
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: avatarProps,
  emits: avatarEmits,
  setup(__props, { emit }) {
    const props = __props;
    const avatarStyle = computed(() => {
      return {
        "--etu-avatar-size": props.size + "px",
      };
    });
    const imgStyle = computed(() => {
      return {
        "object-fit": props.fit,
      };
    });
    function handleError(e) {
      emit("error", e);
    }
    const ns = useNamespace("avatar");
    return (_ctx, _cache) => {
      const _component_etu_icon = resolveComponent("etu-icon");
      return (
        openBlock(),
        createElementBlock(
          "div",
          {
            class: normalizeClass([unref(ns).b(), unref(ns).e(props.shape)]),
            style: normalizeStyle(unref(avatarStyle)),
          },
          [
            props.icon
              ? (openBlock(),
                createBlock(
                  _component_etu_icon,
                  {
                    key: 0,
                    class: normalizeClass(unref(ns).e("icon")),
                    name: props.icon,
                  },
                  null,
                  8,
                  ["class", "name"],
                ))
              : props.src
              ? (openBlock(),
                createElementBlock(
                  "img",
                  {
                    key: 1,
                    src: props.src,
                    srcset: props.srcSet,
                    alt: props.alt,
                    style: normalizeStyle(unref(imgStyle)),
                    onError: handleError,
                  },
                  null,
                  44,
                  _hoisted_1,
                ))
              : renderSlot(_ctx.$slots, "default", { key: 2 }),
          ],
          6,
        )
      );
    };
  },
});
export { _sfc_main as default };
