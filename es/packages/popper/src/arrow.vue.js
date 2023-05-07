import {
  defineComponent,
  openBlock,
  createElementBlock,
  normalizeClass,
  unref,
} from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "arrow",
  setup(__props) {
    const ns = useNamespace("popper");
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "div",
          {
            class: normalizeClass(unref(ns).e("arrow")),
            "data-popper-arrow": "",
          },
          null,
          2,
        )
      );
    };
  },
});
export { _sfc_main as default };
