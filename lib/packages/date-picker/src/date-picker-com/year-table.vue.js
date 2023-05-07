"use strict";
const vue = require("vue");
const index = require("../../../hooks/use-namespace/index.js");
require("../../../hooks/use-z-index/index.js");
const dateTable = require("../props/date-table.js");
const dataPicker = require("../../../tokens/data-picker.js");
const utils = require("../utils.js");
const _hoisted_1 = ["onClick"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "year-table",
  props: dateTable.dateTableProps,
  setup(__props) {
    const datePicker = vue.inject(dataPicker.datePickerKey);
    const { type, getYear, setYear, changeType } = datePicker;
    const { date, originDate } = vue.toRefs(datePicker);
    const ns = index.useNamespace("date-table");
    const years = vue.reactive([
      [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
      [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
      [{ value: 0 }, { value: 0 }],
    ]);
    const handleClickCell = (item) => {
      setYear(item.value);
      init();
      type !== "year" && changeType("month");
    };
    const init = () => {
      const today = utils.now();
      const selectedYear = originDate.value ? getYear() : "";
      const nYear = today.year();
      let cnt = Math.floor(date.value.year() / 10) * 10;
      for (const arr of years) {
        for (const year of arr) {
          if (nYear === cnt) {
            year.current = true;
          } else {
            year.current = false;
          }
          if (cnt === selectedYear) {
            year.selected = true;
          } else {
            year.selected = false;
          }
          year.value = cnt++;
        }
      }
    };
    vue.watch(
      () => date.value,
      () => {
        init();
      },
    );
    vue.onMounted(() => {
      init();
    });
    return (_ctx, _cache) => {
      return (
        vue.openBlock(),
        vue.createElementBlock(
          "table",
          {
            class: vue.normalizeClass([
              vue.unref(ns).b(),
              vue.unref(ns).m("month"),
            ]),
            role: "grid",
            cellspacing: "0",
            cellpadding: "0",
          },
          [
            (vue.openBlock(true),
            vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(years, (row) => {
                return (
                  vue.openBlock(),
                  vue.createElementBlock(
                    "tr",
                    {
                      key: row.toString(),
                    },
                    [
                      (vue.openBlock(true),
                      vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(row, (item) => {
                          return (
                            vue.openBlock(),
                            vue.createElementBlock(
                              "td",
                              {
                                key: `${row}.${item.value}`,
                                onClick: vue.withModifiers(
                                  ($event) => handleClickCell(item),
                                  ["stop"],
                                ),
                              },
                              [
                                vue.createElementVNode(
                                  "div",
                                  {
                                    class: vue.normalizeClass(
                                      vue.unref(ns).b("cell"),
                                    ),
                                  },
                                  [
                                    vue.createElementVNode(
                                      "span",
                                      {
                                        class: vue.normalizeClass([
                                          vue.unref(ns).e("cell-text"),
                                          vue
                                            .unref(ns)
                                            .is("selected", item.selected),
                                          vue
                                            .unref(ns)
                                            .is("current", item.current),
                                        ]),
                                      },
                                      vue.toDisplayString(item.value),
                                      3,
                                    ),
                                  ],
                                  2,
                                ),
                              ],
                              8,
                              _hoisted_1,
                            )
                          );
                        }),
                        128,
                      )),
                    ],
                  )
                );
              }),
              128,
            )),
          ],
          2,
        )
      );
    };
  },
});
module.exports = _sfc_main;
