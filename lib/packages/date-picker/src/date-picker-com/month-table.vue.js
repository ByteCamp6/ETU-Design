"use strict";
const vue = require("vue");
const index = require("../../../hooks/use-namespace/index.js");
require("../../../hooks/use-z-index/index.js");
const dateTable = require("../props/date-table.js");
const dataPicker = require("../../../tokens/data-picker.js");
const utils = require("../utils.js");
const _hoisted_1 = ["onClick"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "month-table",
  props: dateTable.dateTableProps,
  setup(__props) {
    const months = vue.reactive([
      [
        { label: "Jan", value: 0 },
        { label: "Feb", value: 1 },
        { label: "Mar", value: 2 },
        { label: "Apr", value: 3 }
      ],
      [
        { label: "May", value: 4 },
        { label: "Jun", value: 5 },
        { label: "Jul", value: 6 },
        { label: "Aug", value: 7 }
      ],
      [
        { label: "Sep", value: 8 },
        { label: "Oct", value: 9 },
        { label: "Nov", value: 10 },
        { label: "Dec", value: 11 }
      ]
    ]);
    const datePicker = vue.inject(dataPicker.datePickerKey);
    const { type, setMonth, getMonth, getYear, changeType } = datePicker;
    const { date, originDate } = vue.toRefs(datePicker);
    const ns = index.useNamespace("date-table");
    const handleClickCell = (item) => {
      setMonth(item.value);
      init();
      type === "date" && changeType("date");
    };
    const init = () => {
      const today = utils.now();
      const selectedMonth = getMonth();
      const cYear = date.value.year(), nYear = today.year(), nMonth = today.month();
      for (const arr of months) {
        for (const month of arr) {
          if (cYear === nYear && nMonth === month.value) {
            month.current = true;
          } else {
            month.current = false;
          }
          if (cYear === nYear && month.value === selectedMonth) {
            month.selected = true;
          } else {
            month.selected = false;
          }
        }
      }
    };
    vue.watch(
      () => date.value,
      () => {
        init();
      }
    );
    vue.onMounted(() => {
      init();
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("table", {
        class: vue.normalizeClass([vue.unref(ns).b(), vue.unref(ns).m("month")]),
        role: "grid",
        cellspacing: "0",
        cellpadding: "0"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(months, (row) => {
          return vue.openBlock(), vue.createElementBlock("tr", {
            key: row.toString()
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(row, (item) => {
              return vue.openBlock(), vue.createElementBlock("td", {
                key: `${row}.${item.label}`,
                onClick: vue.withModifiers(($event) => handleClickCell(item), ["stop"])
              }, [
                vue.createElementVNode("div", {
                  class: vue.normalizeClass(vue.unref(ns).b("cell"))
                }, [
                  vue.createElementVNode("span", {
                    class: vue.normalizeClass([
                      vue.unref(ns).e("cell-text"),
                      vue.unref(ns).is("selected", item.selected),
                      vue.unref(ns).is("current", item.current)
                    ])
                  }, vue.toDisplayString(item.label), 3)
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
