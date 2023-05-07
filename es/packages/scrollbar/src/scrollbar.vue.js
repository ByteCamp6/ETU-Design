import {
  defineComponent,
  ref,
  computed,
  onMounted,
  nextTick,
  onUpdated,
  openBlock,
  createElementBlock,
  normalizeClass,
  unref,
  createElementVNode,
  normalizeStyle,
  renderSlot,
  createBlock,
  createCommentVNode,
} from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { scrollbarProps, scrollbarEmits } from "./scrollbar.js";
import _sfc_main$1 from "./bar.vue.js";
const __default__ = {
  name: "EtuScrollbar",
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: scrollbarProps,
  emits: scrollbarEmits,
  setup(__props, { emit }) {
    const props = __props;
    const wrap = ref();
    const view = ref();
    const barRef = ref();
    const ns = useNamespace("scrollbar");
    const ratioY = ref(1);
    const ratioX = ref(1);
    const sizeWidth = ref("0");
    const sizeHeight = ref("0");
    const wrapperStyle = computed(() => {
      return {
        height:
          typeof props.height === "number" ? props.height + "px" : props.height,
        maxHeight:
          typeof props.maxHeight === "number"
            ? props.maxHeight + "px"
            : props.maxHeight,
      };
    });
    const handleScroll = () => {
      var _a;
      if (wrap.value) {
        (_a = barRef.value) == null ? void 0 : _a.handleScroll(wrap.value);
        emit("scroll", {
          scrollTop: wrap.value.scrollTop,
          scrollLeft: wrap.value.scrollLeft,
        });
      }
    };
    const update = () => {
      if (!wrap.value || (props == null ? void 0 : props.native)) return;
      const offsetHeight = wrap.value.offsetHeight - 4;
      const offsetWidth = wrap.value.offsetWidth - 4;
      const originalHeight = offsetHeight ** 2 / wrap.value.scrollHeight;
      const originalWidth = offsetWidth ** 2 / wrap.value.scrollWidth;
      const height = Math.max(originalHeight, props.minSize);
      const width = Math.max(originalWidth, props.minSize);
      ratioY.value =
        originalHeight /
        (offsetHeight - originalHeight) /
        (height / (offsetHeight - height));
      ratioX.value =
        originalWidth /
        (offsetWidth - originalWidth) /
        (width / (offsetWidth - width));
      sizeHeight.value = height + 4 < offsetHeight ? `${height}px` : "";
      sizeWidth.value = width + 4 < offsetWidth ? `${width}px` : "";
    };
    onMounted(() => {
      if (!props.native)
        nextTick(() => {
          update();
        });
    });
    onUpdated(() => update());
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "div",
          {
            class: normalizeClass(unref(ns).b()),
          },
          [
            createElementVNode(
              "div",
              {
                ref_key: "wrap",
                ref: wrap,
                class: normalizeClass([
                  unref(ns).e("wrapper"),
                  { [unref(ns).em("wrapper", "hidden-default")]: !_ctx.native },
                ]),
                style: normalizeStyle(unref(wrapperStyle)),
                onScroll: handleScroll,
              },
              [
                createElementVNode(
                  "div",
                  {
                    class: normalizeClass(unref(ns).e("view")),
                    ref_key: "view",
                    ref: view,
                  },
                  [renderSlot(_ctx.$slots, "default")],
                  2,
                ),
              ],
              38,
            ),
            !_ctx.native
              ? (openBlock(),
                createBlock(
                  _sfc_main$1,
                  {
                    key: 0,
                    always: _ctx.always,
                    width: sizeWidth.value,
                    height: sizeHeight.value,
                    ratioX: ratioX.value,
                    ratioY: ratioY.value,
                    ref_key: "barRef",
                    ref: barRef,
                  },
                  null,
                  8,
                  ["always", "width", "height", "ratioX", "ratioY"],
                ))
              : createCommentVNode("", true),
          ],
          2,
        )
      );
    };
  },
});
export { _sfc_main as default };
