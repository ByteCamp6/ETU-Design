import { computed, getCurrentInstance, ref, watch } from "vue";
import etuCheckbox from "@etu-design/checkbox";
import etuRadio from "@etu-design/radio";
import type { TableColumnCtx } from "./defaults";
import type { TableProps, TableRowSelection } from "../table";
import type { ComputedRef, FunctionalComponent } from "vue";

const { Checkbox: EtuCheckbox } = etuCheckbox;
const { Radio: EtuRadio } = etuRadio;

export const useTableColumn = (
  props: TableProps<any>,
  hasKey: ComputedRef<boolean>,
) => {
  type Row = (typeof props.data)[number];
  const selectData = ref({});
  const selectCheckboxData = ref<(string | number)[]>([]);
  const selectRadioData = ref("");
  const { emit } = getCurrentInstance()!;

  watch(
    () => selectCheckboxData.value,
    (newValue) => {
      emit("selection-change", newValue);
    },
  );

  const SelectionCell: FunctionalComponent<{
    value: boolean;
    intermediate?: boolean;
    onChange: (val: string | number | boolean) => any;
  }> = ({ value, intermediate = false, onChange }) => {
    return (
      <EtuCheckbox
        onChange={onChange}
        modelValue={value}
        indeterminate={intermediate}
      />
    );
  };

  const selectionColumn = computed<TableColumnCtx<Row> | undefined>(() => {
    if (!hasKey.value) {
      return undefined;
    }
    if (props.rowSelection) {
      const rowSelection = props.rowSelection as TableRowSelection;
      const selectRender: TableColumnCtx<Row> = {
        label: "",
        prop: "selection",
        width: props.rowSelection.width ?? 50,
        fixed: props.rowSelection.fixed ? "left" : undefined,
      };
      const rowKeyColumn = props.rowKey!;
      if (rowSelection.type === "checkbox") {
        selectRender.cellRender = ({ record }) => {
          const rowKey = record[rowKeyColumn!];
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
            <SelectionCell
              value={selectData.value[rowKey]}
              onChange={onChange}
            />
          );
        };
        if (rowSelection?.showCheckedAll) {
          selectRender.headerRender = () => {
            const _data = props.data!;
            const onChange = (value) => {
              _data.map((record) => {
                selectData.value[record[rowKeyColumn]] = value;
              });
              value
                ? (selectCheckboxData.value = Object.keys(selectData.value))
                : (selectCheckboxData.value = []);
              emit("select-all", selectCheckboxData.value, value);
            };
            const allSelected = _data.every(
              (record) => selectData.value[record[rowKeyColumn]],
            );
            const containsChecked = _data.some(
              (record) => selectData.value[record[rowKeyColumn]],
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
          const rowKey = record[rowKeyColumn];
          const onChange = () => {
            selectRadioData.value = rowKey;
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

  return {
    selectionColumn,
  };
};
