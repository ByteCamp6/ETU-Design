"use strict";
const vue = require("vue");
const index = require("../../../hooks/use-namespace/index.js");
require("../../../hooks/use-z-index/index.js");
const dateTable = require("../props/date-table.js");
const dataPicker = require("../../../tokens/data-picker.js");
const utils = require("../utils.js");
const _hoisted_1 = ["onClick"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "date-table",
  props: dateTable.dateTableProps,
  setup(__props) {
    const props = __props;
    const datePicker = vue.inject(dataPicker.datePickerKey);
    const { setDay, setMonth, setYear } = datePicker;
    const { selected } = vue.toRefs(datePicker);
    const { value, model } = vue.toRefs(props);
    let tableData = vue.ref([]);
    const ns = index.useNamespace("date-table");
    const handleClickCell = (item) => {
      setDay(item.value, props.index);
      for (let row of tableData.value) {
        row = row.every((cell) => {
          if (cell.selected)
            cell.selected = false;
          return true;
        });
      }
      item.selected = true;
    };
    vue.watch(
      () => value.value,
      () => {
        tableData.value = utils.getDates(value.value, model.value, selected.value);
      }
    );
    vue.onMounted(() => {
      tableData.value = utils.getDates(value.value, model.value, selected.value);
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("table", {
        class: vue.normalizeClass(vue.unref(ns).b()),
        role: "grid",
        cellspacing: "0",
        cellpadding: "0"
      }, [
        vue.createElementVNode("tr", null, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(utils.WEEKSSHORT), (item) => {
            return vue.openBlock(), vue.createElementBlock("th", { key: item }, vue.toDisplayString(item), 1);
          }), 128))
        ]),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(tableData), (row) => {
          return vue.openBlock(), vue.createElementBlock("tr", { key: row }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(row, (item) => {
              return vue.openBlock(), vue.createElementBlock("td", {
                key: `${row}.${item.value}`,
                onClick: vue.withModifiers(($event) => handleClickCell(item), ["stop"])
              }, [
                vue.createElementVNode("div", {
                  class: vue.normalizeClass(vue.unref(ns).b("cell"))
                }, [
                  vue.createElementVNode("span", {
                    class: vue.normalizeClass([
                      vue.unref(ns).e("cell-text"),
                      vue.unref(ns).is("current", item.today),
                      vue.unref(ns).is("selected", item.selected)
                    ])
                  }, vue.toDisplayString(item.value), 3)
                ], 2)
              ], 8, _hoisted_1);
            }), 128))
          ]);
        }), 128))
      ], 2);
    };
  }
});
module.exports = _sfc_main;
