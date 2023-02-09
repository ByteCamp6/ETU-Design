<template>
  <div :class="[ns.b()]">
    <div :class="ns.e('inner-wrapper')">
      <div ref="hiddenColumns" class="hidden-columns">
        <slot />
      </div>
      <div :class="ns.e('header-wrapper')">
        <table
          :class="ns.e('header')"
          border="0"
          cellpadding="0"
          cellspacing="0"
          :style="{
            width: '100%',
            tableLayout: 'fixed',
          }"
        >
          <table-colgroup></table-colgroup>
          <table-header></table-header>
        </table>
      </div>
      <div :class="ns.e('body-wrapper')">
        <!--        <el-scrollbar>-->
        <table
          :class="ns.e('body')"
          cellspacing="0"
          cellpadding="0"
          border="0"
          :style="{
            width: '100%',
            tableLayout: 'fixed',
          }"
        >
          <table-colgroup></table-colgroup>
          <table-body></table-body>
        </table>
        <!--        </el-scrollbar>-->
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup name="EtuTable">
import { useNamespace } from "@etu-design/hooks";
import TableColgroup from "./tableColgroup.vue";
import { tableProps, TableRowSelection } from "./table.ts";
import { computed, FunctionalComponent, provide, ref, watch } from "vue";
import { TableKey } from "@etu-design/tokens";
import TableHeader from "./table-header";
import TableBody from "./table-body";
import type { TableColumnCtx } from "./table-column/defaults";
import etuCheckbox from "@etu-design/checkbox";
import etuRadio from "@etu-design/radio";

const { Checkbox: EtuCheckbox } = etuCheckbox;
const { Radio: EtuRadio } = etuRadio;

const props = defineProps(tableProps);
const emit = defineEmits([
  "select",
  "select-all",
  "selection-change",
  "select-radio",
]);
const ns = useNamespace("table");

const SelectionCell: FunctionalComponent = ({
  value,
  intermediate = false,
  onChange,
}) => {
  return (
    <EtuCheckbox
      onChange={onChange}
      modelValue={value}
      indeterminate={intermediate}
    />
  );
};

const selectData = ref({});
const selectCheckboxData = ref<(string | number)[]>([]);
const selectRadioData = ref("");

watch(
  () => selectCheckboxData.value,
  (newValue) => {
    emit("selection-change", newValue);
  },
);

const selectionColumn = computed<TableColumnCtx<any> | undefined>(() => {
  if (!props.columns?.some((column) => column.prop === props.rowKey)) {
    return undefined;
  }
  if (props.rowSelection) {
    const rowSelection = props.rowSelection as TableRowSelection;
    console.log(rowSelection);
    const selectRender: TableColumnCtx<any> = {
      label: "",
      prop: "selection",
      width: props.rowSelection.width ?? 50,
    };
    if (rowSelection.type === "checkbox") {
      selectRender.cellRender = ({ record }) => {
        const rowKey = record[props.rowKey];
        const onChange = (value) => {
          selectData.value[rowKey] = value;
          selectCheckboxData.value = Object.keys(selectData.value).filter(
            (selectKey) => {
              return selectData.value[selectKey];
            },
          );
          emit("select", selectCheckboxData.value, value, rowKey, record);
        };
        return (
          <SelectionCell value={selectData.value[rowKey]} onChange={onChange} />
        );
      };
      if (rowSelection?.showCheckedAll) {
        selectRender.headerRender = () => {
          const _data = props.data!;
          const onChange = (value) => {
            _data.map((record) => {
              selectData.value[record[props.rowKey]] = value;
            });
            value
              ? (selectCheckboxData.value = Object.keys(selectData.value))
              : (selectCheckboxData.value = []);
            emit("select-all", selectCheckboxData.value, value);
          };
          const allSelected = _data.every(
            (record) => selectData.value[record[props.rowKey]],
          );
          const containsChecked = _data.some(
            (record) => selectData.value[record[props.rowKey]],
          );

          return (
            <SelectionCell
              value={allSelected}
              intermediate={containsChecked && !allSelected}
              onChange={onChange}
            />
          );
        };
      }
    } else if (rowSelection.type === "radio") {
      selectRender.cellRender = ({ record }) => {
        const rowKey = record[props.rowKey];
        const onChange = () => {
          selectRadioData.value = rowKey;
          console.log(rowKey, record);
          emit("select-radio", rowKey, record);
        };
        return (
          <EtuRadio
            modelValue={selectRadioData.value}
            onChange={onChange}
            label={rowKey}
          >
            <span></span>
          </EtuRadio>
        );
      };
    }
    return selectRender;
  }
  return undefined;
});

const originColumns = computed(() => {
  const columns = props.columns!;
  if (selectionColumn.value) {
    columns.unshift(selectionColumn.value!);
  }
  return columns;
});

//@ts-ignore
provide(TableKey, {
  originColumns,
  data: props.data,
});
</script>
