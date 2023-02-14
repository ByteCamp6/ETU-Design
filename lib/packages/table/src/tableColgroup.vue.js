"use strict";
const vue = require("vue");
const useTable = require("./use-table.js");
const style = require("../../utils/dom/style.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "tableColgroup",
  setup(__props) {
    const { originColumns } = useTable.useTable();
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("colgroup", null, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(originColumns), (column, index) => {
          return vue.openBlock(), vue.createElementBlock("col", {
            key: index,
            style: vue.normalizeStyle({
              width: column.width ? vue.unref(style.addUnit)(column.width) : null
            })
          }, null, 4);
        }), 128))
      ]);
    };
  }
});
module.exports = _sfc_main;
