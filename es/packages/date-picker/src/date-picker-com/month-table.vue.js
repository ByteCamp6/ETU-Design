import { defineComponent, reactive, inject, toRefs, watch, onMounted, openBlock, createElementBlock, normalizeClass, unref, Fragment, renderList, withModifiers, createElementVNode, toDisplayString } from "vue";
import { useNamespace } from "../../../hooks/use-namespace/index.js";
import "../../../hooks/use-z-index/index.js";
import { dateTableProps } from "../props/date-table.js";
import { datePickerKey } from "../../../tokens/data-picker.js";
import { now } from "../utils.js";
const _hoisted_1 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "month-table",
  props: dateTableProps,
  setup(__props) {
    const months = reactive([
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
    const datePicker = inject(datePickerKey);
    const { type, setMonth, getMonth, getYear, changeType } = datePicker;
    const { date, originDate } = toRefs(datePicker);
    const ns = useNamespace("date-table");
    const handleClickCell = (item) => {
      setMonth(item.value);
      init();
      type === "date" && changeType("date");
    };
    const init = () => {
      const today = now();
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
    watch(
      () => date.value,
      () => {
        init();
      }
    );
    onMounted(() => {
      init();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", {
        class: normalizeClass([unref(ns).b(), unref(ns).m("month")]),
        role: "grid",
        cellspacing: "0",
        cellpadding: "0"
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(months, (row) => {
          return openBlock(), createElementBlock("tr", {
            key: row.toString()
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(row, (item) => {
              return openBlock(), createElementBlock("td", {
                key: `${row}.${item.label}`,
                onClick: withModifiers(($event) => handleClickCell(item), ["stop"])
              }, [
                createElementVNode("div", {
                  class: normalizeClass(unref(ns).b("cell"))
                }, [
                  createElementVNode("span", {
                    class: normalizeClass([
                      unref(ns).e("cell-text"),
                      unref(ns).is("selected", item.selected),
                      unref(ns).is("current", item.current)
                    ])
                  }, toDisplayString(item.label), 3)
                ], 2)
              ], 8, _hoisted_1);
            }), 128))
          ]);
        }), 128))
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
