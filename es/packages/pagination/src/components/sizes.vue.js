import { defineComponent, ref, watch, computed, openBlock, createElementBlock, normalizeClass, unref, createVNode, withCtx, Fragment, renderList, createBlock } from "vue";
import select from "../../../select/index.js";
import { usePagination } from "../use-pagination.js";
import { paginationSizesProps } from "./sizes.js";
import { useNamespace } from "../../../hooks/use-namespace/index.js";
import "../../../hooks/use-z-index/index.js";
import isEqual from "../../../../node_modules/lodash-es/isEqual.js";
const __default__ = defineComponent({
  name: "EtuPaginationSizes"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: paginationSizesProps,
  emits: ["page-size-change"],
  setup(__props, { emit }) {
    const props = __props;
    const { Select: EtuSelect, Option: EtuOption } = select;
    const ns = useNamespace("pagination");
    const pagination = usePagination();
    const innerPageSize = ref(props.pageSize);
    watch(
      () => props.pageSizes,
      (newVal, oldVal) => {
        if (isEqual(newVal, oldVal))
          return;
        if (Array.isArray(newVal)) {
          const pageSize = newVal.indexOf(props.pageSize) !== -1 ? props.pageSize : props.pageSizes[0];
          emit("page-size-change", pageSize);
        }
      }
    );
    watch(
      () => props.pageSize,
      (newVal) => {
        innerPageSize.value = newVal;
      }
    );
    const innerPageSizes = computed(() => props.pageSizes);
    function handleChange(val) {
      var _a;
      if (val !== innerPageSize.value) {
        innerPageSize.value = val;
        (_a = pagination.handleSizeChange) == null ? void 0 : _a.call(pagination, Number(val));
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns).e("sizes"))
      }, [
        createVNode(unref(EtuSelect), {
          "model-value": innerPageSize.value,
          disabled: props.disabled,
          "popper-class": props.popperClass,
          "onUpdate:modelValue": handleChange
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(innerPageSizes), (item) => {
              return openBlock(), createBlock(unref(EtuOption), {
                key: item,
                value: item,
                label: `${item}条/页`
              }, null, 8, ["value", "label"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["model-value", "disabled", "popper-class"])
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
