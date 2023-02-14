"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const tableColgroup_vue_vue_type_script_setup_true_lang = require("./tableColgroup.vue.js");
const table = require("./table.js");
const table$1 = require("../../tokens/table.js");
const index$1 = require("./table-header/index.js");
const index$2 = require("./table-body/index.js");
const index$4 = require("../../checkbox/index.js");
const index$3 = require("../../radio/index.js");
const _hoisted_1 = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
const __default__ = /* @__PURE__ */ vue.defineComponent({
  name: "EtuTable"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: table.tableProps,
  emits: ["select", "select-all", "selection-change", "select-radio"],
  setup(__props, {
    emit
  }) {
    const props = __props;
    const {
      Checkbox: EtuCheckbox
    } = index$4;
    const {
      Radio: EtuRadio
    } = index$3;
    const ns = index.useNamespace("table");
    const SelectionCell = ({
      value,
      intermediate = false,
      onChange
    }) => {
      return vue.createVNode(EtuCheckbox, {
        "onChange": onChange,
        "modelValue": value,
        "indeterminate": intermediate
      }, null);
    };
    const selectData = vue.ref({});
    const selectCheckboxData = vue.ref([]);
    const selectRadioData = vue.ref("");
    vue.watch(() => selectCheckboxData.value, (newValue) => {
      emit("selection-change", newValue);
    });
    const hasKey = vue.computed(() => {
      var _a;
      return (_a = props.columns) == null ? void 0 : _a.some((column) => column.prop === props.rowKey);
    });
    const selectionColumn = vue.computed(() => {
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
            return vue.createVNode(SelectionCell, {
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
              return vue.createVNode(SelectionCell, {
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
            return vue.createVNode(EtuRadio, {
              "modelValue": selectRadioData.value,
              "onChange": onChange,
              "label": rowKey
            }, {
              default: () => [vue.createVNode("span", null, null)]
            });
          };
        }
        return selectRender;
      }
      return void 0;
    });
    const originColumns = vue.computed(() => {
      const columns = props.columns;
      if (selectionColumn.value) {
        columns.unshift(selectionColumn.value);
      }
      return columns;
    });
    vue.provide(table$1.TableKey, {
      hasKey,
      originColumns,
      data: props.data,
      rowClass: props.rowClass
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([vue.unref(ns).b()])
      }, [vue.createElementVNode("div", {
        class: vue.normalizeClass(vue.unref(ns).e("inner-wrapper"))
      }, [vue.createElementVNode("div", _hoisted_1, [vue.renderSlot(_ctx.$slots, "default")], 512), vue.createElementVNode("div", {
        class: vue.normalizeClass(vue.unref(ns).e("header-wrapper"))
      }, [vue.createElementVNode("table", {
        class: vue.normalizeClass(vue.unref(ns).e("header")),
        border: "0",
        cellpadding: "0",
        cellspacing: "0",
        style: {
          width: "100%",
          tableLayout: "fixed"
        }
      }, [vue.createVNode(tableColgroup_vue_vue_type_script_setup_true_lang), vue.createVNode(vue.unref(index$1))], 2)], 2), vue.createElementVNode("div", {
        class: vue.normalizeClass(vue.unref(ns).e("body-wrapper"))
      }, [vue.createElementVNode("table", {
        class: vue.normalizeClass(vue.unref(ns).e("body")),
        cellspacing: "0",
        cellpadding: "0",
        border: "0",
        style: {
          width: "100%",
          tableLayout: "fixed"
        }
      }, [vue.createVNode(tableColgroup_vue_vue_type_script_setup_true_lang), vue.createVNode(vue.unref(index$2))], 2)], 2)], 2)], 2);
    };
  }
});
module.exports = _sfc_main;
