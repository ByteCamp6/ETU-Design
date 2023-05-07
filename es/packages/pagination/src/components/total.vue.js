import {
  defineComponent,
  openBlock,
  createElementBlock,
  normalizeClass,
  unref,
  toDisplayString,
} from "vue";
import { useNamespace } from "../../../hooks/use-namespace/index.js";
import "../../../hooks/use-z-index/index.js";
import { usePagination } from "../use-pagination.js";
import { paginationTotalProps } from "./total.js";
const _hoisted_1 = ["disabled"];
const __default__ = defineComponent({
  name: "EtuPaginationTotal",
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: paginationTotalProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("pagination");
    const { disabled } = usePagination();
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "span",
          {
            class: normalizeClass(unref(ns).e("total")),
            disabled: unref(disabled),
          },
          toDisplayString(`总计${props.total}条`),
          11,
          _hoisted_1,
        )
      );
    };
  },
});
export { _sfc_main as default };
