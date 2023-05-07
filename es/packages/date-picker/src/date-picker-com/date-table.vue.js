import {
  defineComponent,
  inject,
  toRefs,
  ref,
  watch,
  onMounted,
  openBlock,
  createElementBlock,
  normalizeClass,
  unref,
  createElementVNode,
  Fragment,
  renderList,
  toDisplayString,
  withModifiers,
} from "vue";
import { useNamespace } from "../../../hooks/use-namespace/index.js";
import "../../../hooks/use-z-index/index.js";
import { dateTableProps } from "../props/date-table.js";
import { datePickerKey } from "../../../tokens/data-picker.js";
import { getDates, WEEKSSHORT } from "../utils.js";
const _hoisted_1 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "date-table",
  props: dateTableProps,
  setup(__props) {
    const props = __props;
    const datePicker = inject(datePickerKey);
    const { setDay, setMonth, setYear } = datePicker;
    const { selected } = toRefs(datePicker);
    const { value, model } = toRefs(props);
    let tableData = ref([]);
    const ns = useNamespace("date-table");
    const handleClickCell = (item) => {
      setDay(item.value, props.index);
      for (let row of tableData.value) {
        row = row.every((cell) => {
          if (cell.selected) cell.selected = false;
          return true;
        });
      }
      item.selected = true;
    };
    watch(
      () => value.value,
      () => {
        tableData.value = getDates(value.value, model.value, selected.value);
      },
    );
    onMounted(() => {
      tableData.value = getDates(value.value, model.value, selected.value);
    });
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "table",
          {
            class: normalizeClass(unref(ns).b()),
            role: "grid",
            cellspacing: "0",
            cellpadding: "0",
          },
          [
            createElementVNode("tr", null, [
              (openBlock(true),
              createElementBlock(
                Fragment,
                null,
                renderList(unref(WEEKSSHORT), (item) => {
                  return (
                    openBlock(),
                    createElementBlock(
                      "th",
                      { key: item },
                      toDisplayString(item),
                      1,
                    )
                  );
                }),
                128,
              )),
            ]),
            (openBlock(true),
            createElementBlock(
              Fragment,
              null,
              renderList(unref(tableData), (row) => {
                return (
                  openBlock(),
                  createElementBlock("tr", { key: row }, [
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
                                        unref(ns).is("current", item.today),
                                        unref(ns).is("selected", item.selected),
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
                  ])
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
