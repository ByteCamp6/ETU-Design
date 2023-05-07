import {
  defineComponent,
  ref,
  openBlock,
  createElementBlock,
  Fragment,
  createVNode,
} from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { barProps } from "./bar.js";
import _sfc_main$1 from "./thumb.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "bar",
  props: barProps,
  setup(__props, { expose }) {
    const props = __props;
    const moveX = ref(0);
    const moveY = ref(0);
    const handleScroll = (wrap) => {
      if (wrap) {
        const offsetHeight = wrap.offsetHeight - 4;
        const offsetWidth = wrap.offsetWidth - 4;
        moveY.value = ((wrap.scrollTop * 100) / offsetHeight) * props.ratioY;
        moveX.value = ((wrap.scrollLeft * 100) / offsetWidth) * props.ratioX;
      }
    };
    useNamespace("scrollbar");
    expose({
      handleScroll,
    });
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          Fragment,
          null,
          [
            createVNode(
              _sfc_main$1,
              {
                move: moveX.value,
                ratio: _ctx.ratioX,
                size: _ctx.width,
                always: _ctx.always,
              },
              null,
              8,
              ["move", "ratio", "size", "always"],
            ),
            createVNode(
              _sfc_main$1,
              {
                move: moveY.value,
                ratio: _ctx.ratioY,
                size: _ctx.height,
                vertical: "",
                always: _ctx.always,
              },
              null,
              8,
              ["move", "ratio", "size", "always"],
            ),
          ],
          64,
        )
      );
    };
  },
});
export { _sfc_main as default };
