import {
  defineComponent,
  inject,
  toRefs,
  reactive,
  watch,
  onMounted,
  openBlock,
  createElementBlock,
  normalizeClass,
  unref,
  Fragment,
  renderList,
  withModifiers,
  createElementVNode,
  toDisplayString,
} from "vue";
import { useNamespace } from "../../../hooks/use-namespace/index.js";
import "../../../hooks/use-z-index/index.js";
import { dateTableProps } from "../props/date-table.js";
import { datePickerKey } from "../../../tokens/data-picker.js";
import { now } from "../utils.js";
const _hoisted_1 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "year-table",
  props: dateTableProps,
  setup(__props) {
    const datePicker = inject(datePickerKey);
    const { type, getYear, setYear, changeType } = datePicker;
    const { date, originDate } = toRefs(datePicker);
    const ns = useNamespace("date-table");
    const years = reactive([
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
      const today = now();
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
    watch(
      () => date.value,
      () => {
        init();
      },
    );
    onMounted(() => {
      init();
    });
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "table",
          {
            class: normalizeClass([unref(ns).b(), unref(ns).m("month")]),
            role: "grid",
            cellspacing: "0",
            cellpadding: "0",
          },
          [
            (openBlock(true),
            createElementBlock(
              Fragment,
              null,
              renderList(years, (row) => {
                return (
                  openBlock(),
                  createElementBlock(
                    "tr",
                    {
                      key: row.toString(),
                    },
                    [
                      (openBlock(true),
                      createElementBlock(
                        Fragment,
                        null,
                        renderList(row, (item) => {
                          return (
                            openBlock(),
                            createElementBlock(
                              "td",
                              {
                                key: `${row}.${item.value}`,
                                onClick: withModifiers(
                                  ($event) => handleClickCell(item),
                                  ["stop"],
                                ),
                              },
                              [
                                createElementVNode(
                                  "div",
                                  {
                                    class: normalizeClass(unref(ns).b("cell")),
                                  },
                                  [
                                    createElementVNode(
                                      "span",
                                      {
                                        class: normalizeClass([
                                          unref(ns).e("cell-text"),
                                          unref(ns).is(
                                            "selected",
                                            item.selected,
                                          ),
                                          unref(ns).is("current", item.current),
                                        ]),
                                      },
                                      toDisplayString(item.value),
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
export { _sfc_main as default };
