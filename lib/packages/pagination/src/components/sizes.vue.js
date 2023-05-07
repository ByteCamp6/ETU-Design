"use strict";
const vue = require("vue");
const index$1 = require("../../../select/index.js");
const usePagination = require("../use-pagination.js");
const sizes = require("./sizes.js");
const index = require("../../../hooks/use-namespace/index.js");
require("../../../hooks/use-z-index/index.js");
const isEqual = require("../../../../node_modules/lodash-es/isEqual.js");
const __default__ = vue.defineComponent({
  name: "EtuPaginationSizes",
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: sizes.paginationSizesProps,
  emits: ["page-size-change"],
  setup(__props, { emit }) {
    const props = __props;
    const { Select: EtuSelect, Option: EtuOption } = index$1.default;
    const ns = index.useNamespace("pagination");
    const pagination = usePagination.usePagination();
    const innerPageSize = vue.ref(props.pageSize);
    vue.watch(
      () => props.pageSizes,
      (newVal, oldVal) => {
        if (isEqual(newVal, oldVal)) return;
        if (Array.isArray(newVal)) {
          const pageSize =
            newVal.indexOf(props.pageSize) !== -1
              ? props.pageSize
              : props.pageSizes[0];
          emit("page-size-change", pageSize);
        }
      },
    );
    vue.watch(
      () => props.pageSize,
      (newVal) => {
        innerPageSize.value = newVal;
      },
    );
    const innerPageSizes = vue.computed(() => props.pageSizes);
    function handleChange(val) {
      var _a;
      if (val !== innerPageSize.value) {
        innerPageSize.value = val;
        (_a = pagination.handleSizeChange) == null
          ? void 0
          : _a.call(pagination, Number(val));
      }
    }
    return (_ctx, _cache) => {
      return (
        vue.openBlock(),
        vue.createElementBlock(
          "span",
          {
            class: vue.normalizeClass(vue.unref(ns).e("sizes")),
          },
          [
            vue.createVNode(
              vue.unref(EtuSelect),
              {
                "model-value": innerPageSize.value,
                disabled: props.disabled,
                "popper-class": props.popperClass,
                "onUpdate:modelValue": handleChange,
              },
              {
                default: vue.withCtx(() => [
                  (vue.openBlock(true),
                  vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(vue.unref(innerPageSizes), (item) => {
                      return (
                        vue.openBlock(),
                        vue.createBlock(
                          vue.unref(EtuOption),
                          {
                            key: item,
                            value: item,
                            label: `${item}条/页`,
                          },
                          null,
                          8,
                          ["value", "label"],
                        )
                      );
                    }),
                    128,
                  )),
                ]),
                _: 1,
              },
              8,
              ["model-value", "disabled", "popper-class"],
            ),
          ],
          2,
        )
      );
    };
  },
});
module.exports = _sfc_main;
