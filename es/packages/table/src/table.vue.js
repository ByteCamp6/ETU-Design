import { defineComponent, ref, watch, computed, createVNode, provide, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, renderSlot } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import _sfc_main$1 from "./tableColgroup.vue.js";
import { tableProps } from "./table.js";
import { TableKey } from "../../tokens/table.js";
import TableHeader from "./table-header/index.js";
import TableBody from "./table-body/index.js";
import checkbox from "../../checkbox/index.js";
import radio from "../../radio/index.js";
const _hoisted_1 = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
const __default__ = /* @__PURE__ */ defineComponent({
  name: "EtuTable"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: tableProps,
  emits: ["select", "select-all", "selection-change", "select-radio"],
  setup(__props, {
    emit
  }) {
    const props = __props;
    const {
      Checkbox: EtuCheckbox
    } = checkbox;
    const {
      Radio: EtuRadio
    } = radio;
    const ns = useNamespace("table");
    const SelectionCell = ({
      value,
      intermediate = false,
      onChange
    }) => {
      return createVNode(EtuCheckbox, {
        "onChange": onChange,
        "modelValue": value,
        "indeterminate": intermediate
      }, null);
    };
    const selectData = ref({});
    const selectCheckboxData = ref([]);
    const selectRadioData = ref("");
    watch(() => selectCheckboxData.value, (newValue) => {
      emit("selection-change", newValue);
    });
    const hasKey = computed(() => {
      var _a;
      return (_a = props.columns) == null ? void 0 : _a.some((column) => column.prop === props.rowKey);
    });
    const selectionColumn = computed(() => {
      if (!hasKey.value) {
        return void 0;
      }
      if (props.rowSelection) {
        const rowSelection = props.rowSelection;
        const selectRender = {
          label: "",
          prop: "selection",
          width: props.rowSelection.width ?? 50
        };
        if (rowSelection.type === "checkbox") {
          selectRender.cellRender = ({
            record
          }) => {
            const rowKey = record[props.rowKey];
            const onChange = (value) => {
              selectData.value[rowKey] = value;
              selectCheckboxData.value = Object.keys(selectData.value).filter((selectKey) => {
                return selectData.value[selectKey];
              });
              emit("select", selectCheckboxData.value, value, rowKey, record);
            };
            return createVNode(SelectionCell, {
              "value": selectData.value[rowKey],
              "onChange": onChange
            }, null);
          };
          if (rowSelection == null ? void 0 : rowSelection.showCheckedAll) {
            selectRender.headerRender = () => {
              const _data = props.data;
              const onChange = (value) => {
                _data.map((record) => {
                  selectData.value[record[props.rowKey]] = value;
                });
                value ? selectCheckboxData.value = Object.keys(selectData.value) : selectCheckboxData.value = [];
                emit("select-all", selectCheckboxData.value, value);
              };
              const allSelected = _data.every((record) => selectData.value[record[props.rowKey]]);
              const containsChecked = _data.some((record) => selectData.value[record[props.rowKey]]);
              return createVNode(SelectionCell, {
                "value": allSelected,
                "intermediate": containsChecked && !allSelected,
                "onChange": onChange
              }, null);
            };
          }
        } else if (rowSelection.type === "radio") {
          selectRender.cellRender = ({
            record
          }) => {
            const rowKey = record[props.rowKey];
            const onChange = () => {
              selectRadioData.value = rowKey;
              emit("select-radio", rowKey, record);
            };
            return createVNode(EtuRadio, {
              "modelValue": selectRadioData.value,
              "onChange": onChange,
              "label": rowKey
            }, {
              default: () => [createVNode("span", null, null)]
            });
          };
        }
        return selectRender;
      }
      return void 0;
    });
    const originColumns = computed(() => {
      const columns = props.columns;
      if (selectionColumn.value) {
        columns.unshift(selectionColumn.value);
      }
      return columns;
    });
    provide(TableKey, {
      hasKey,
      originColumns,
      data: props.data,
      rowClass: props.rowClass
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b()])
      }, [createElementVNode("div", {
        class: normalizeClass(unref(ns).e("inner-wrapper"))
      }, [createElementVNode("div", _hoisted_1, [renderSlot(_ctx.$slots, "default")], 512), createElementVNode("div", {
        class: normalizeClass(unref(ns).e("header-wrapper"))
      }, [createElementVNode("table", {
        class: normalizeClass(unref(ns).e("header")),
        border: "0",
        cellpadding: "0",
        cellspacing: "0",
        style: {
          width: "100%",
          tableLayout: "fixed"
        }
      }, [createVNode(_sfc_main$1), createVNode(unref(TableHeader))], 2)], 2), createElementVNode("div", {
        class: normalizeClass(unref(ns).e("body-wrapper"))
      }, [createElementVNode("table", {
        class: normalizeClass(unref(ns).e("body")),
        cellspacing: "0",
        cellpadding: "0",
        border: "0",
        style: {
          width: "100%",
          tableLayout: "fixed"
        }
      }, [createVNode(_sfc_main$1), createVNode(unref(TableBody))], 2)], 2)], 2)], 2);
    };
  }
});
export {
  _sfc_main as default
};
