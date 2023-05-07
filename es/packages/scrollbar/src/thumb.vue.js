import {
  defineComponent,
  ref,
  computed,
  openBlock,
  createElementBlock,
  normalizeClass,
  unref,
  createElementVNode,
  normalizeStyle,
} from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { thumbProps } from "./thumb.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "thumb",
  props: thumbProps,
  setup(__props) {
    const props = __props;
    ref(0);
    const barClass = computed(() => {
      return [
        ns.e("bar"),
        ns.is("vertical", props.vertical),
        ns.is("horizontal", !props.vertical),
      ];
    });
    const thumbStyle = computed(() => {
      return {
        width: !props.vertical ? props.size : "",
        height: props.vertical ? props.size : "",
        transform: `translateY(${props.move}%)`,
      };
    });
    const ns = useNamespace("scrollbar");
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "div",
          {
            class: normalizeClass(unref(barClass)),
          },
          [
            createElementVNode(
              "div",
              {
                class: normalizeClass(unref(ns).e("thumb")),
                style: normalizeStyle(unref(thumbStyle)),
              },
              null,
              6,
            ),
          ],
          2,
        )
      );
    };
  },
});
export { _sfc_main as default };
