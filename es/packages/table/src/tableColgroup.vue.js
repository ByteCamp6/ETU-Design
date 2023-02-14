import { defineComponent, openBlock, createElementBlock, Fragment, renderList, unref, normalizeStyle } from "vue";
import { useTable } from "./use-table.js";
import { addUnit } from "../../utils/dom/style.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tableColgroup",
  setup(__props) {
    const { originColumns } = useTable();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("colgroup", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(originColumns), (column, index) => {
          return openBlock(), createElementBlock("col", {
            key: index,
            style: normalizeStyle({
              width: column.width ? unref(addUnit)(column.width) : null
            })
          }, null, 4);
        }), 128))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
