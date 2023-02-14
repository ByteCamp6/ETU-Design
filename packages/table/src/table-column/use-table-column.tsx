import { computed, ref, watch } from "vue";
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
  emit: (event: string, ...args: any[]) => void,
) => {
  type Row = (typeof props.data)[number];
  // 放置已经选择的行的桶
  const selectData = ref({});
  // 已经选择的行构成的数组
  const selectCheckboxData = ref<(string | number)[]>([]);
  // 已经单选的值
  const selectRadioData = ref("");

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

  // 单选和多选的功能
  const selectionColumn = computed<TableColumnCtx<Row> | undefined>(() => {
    // 是否有key值
    if (!hasKey.value) {
      console.warn("没有传入key，无法使用单选和多选");
      return undefined;
    }

    if (props.rowSelection) {
      const rowSelection = props.rowSelection as TableRowSelection;
      // 配置select的渲染函数
      const selectRender: TableColumnCtx<Row> = {
        label: "",
        prop: "selection",
        width: props.rowSelection.width ?? 50,
        fixed: props.rowSelection.fixed ? "left" : undefined,
      };
      // 给定的提供key的列
      const rowKeyColumn = props.rowKey!;

      if (rowSelection.type === "checkbox") {
        selectRender.cellRender = ({ record }) => {
          // 每一列的key值
          const rowKey = record[rowKeyColumn!];

          const onChange = (value) => {
            // 改变selectData桶中的数据
            selectData.value[rowKey] = value;
            // 为selectCheckboxData提供新值
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
        // 是否展示全选选项
        if (rowSelection?.showCheckedAll) {
          selectRender.headerRender = () => {
            const _data = props.data!;
            const onChange = (value) => {
              // 给每个赋值
              _data.map((record) => {
                selectData.value[record[rowKeyColumn]] = value;
              });
              value
                ? (selectCheckboxData.value = Object.keys(selectData.value))
                : (selectCheckboxData.value = []);
              emit("select-all", selectCheckboxData.value, value);
            };
            // 全选状态
            const allSelected = _data.every(
              (record) => selectData.value[record[rowKeyColumn]],
            );
            // 中间状态
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

  // 左边固定列
  const leftFixedColumns = computed<TableColumnCtx<Row>[]>(() => {
    let styleOffsetWidth = 0;
    //寻找fixed为左的列
    const columns = props.columns!.filter((column) => column?.fixed === "left");

    // 如果有select，且其要求fixed，则把这一列放在最左边
    if (selectionColumn.value && props.rowSelection!.fixed) {
      columns.unshift(selectionColumn.value!);
    }

    // 为每一列添加偏移量
    columns.forEach((column) => {
      column.styleOffsetWidth = styleOffsetWidth;
      styleOffsetWidth += column.width!;
    });

    // 最后一列添加last，方便添加阴影
    columns[columns.length - 1].stylePosition = "last";
    return columns;
  });

  // 未固定列
  const noFixedColumns = computed<TableColumnCtx<Row>[]>(() => {
    const columns = props.columns!.filter(
      (column) => column.fixed === undefined,
    );
    if (selectionColumn.value && !props.rowSelection!.fixed) {
      columns.unshift(selectionColumn.value!);
    }
    return columns;
  });

  // 右边固定列
  const rightFixedColumns = computed<TableColumnCtx<Row>[]>(() => {
    let styleOffsetWidth = 0;
    const columns = props.columns!.filter(
      (column) => column?.fixed === "right",
    );

    // 将列反转后再反转，从而逻辑和左fixed一样
    columns.reverse();
    columns.forEach((column) => {
      column.styleOffsetWidth = styleOffsetWidth;
      styleOffsetWidth += column.width!;
    });
    columns[columns.length - 1].stylePosition = "first";
    columns.reverse();
    return columns;
  });

  // 合并列
  const originColumns = computed<TableColumnCtx<Row>[]>(() => {
    const columns: TableColumnCtx<any>[] = [];
    const LeftFixedColumns = leftFixedColumns.value;
    const NoFixedColumns = noFixedColumns.value;
    const RightFixedColumns = rightFixedColumns.value;
    return columns.concat(LeftFixedColumns, NoFixedColumns, RightFixedColumns);
  });

  function getSelectionRows() {
    const rowKeyColumn = props.rowKey!;
    if (props.rowSelection) {
      const data = props.data!;
      if (props.rowSelection.type === "checkbox") {
        return data.filter((record) => {
          return selectData.value[record[rowKeyColumn]];
        });
      } else {
        return data.find((record) => {
          return record[rowKeyColumn] === selectRadioData.value;
        });
      }
    }
    return [];
  }

  function toggleRowSelection(rowKey: string, selected?: boolean) {
    selected
      ? (selectData.value[rowKey] = selected)
      : (selectData.value[rowKey] = !selectData.value[rowKey]);
    // 为selectCheckboxData提供新值
    selectCheckboxData.value = Object.keys(selectData.value).filter(
      (selectKey) => {
        return selectData.value[selectKey];
      },
    );
  }

  function toggleAllSelection() {
    const data = props.data!;
    const rowKeyColumn = props.rowKey!;
    const allSelected = data.every(
      (record) => selectData.value[record[rowKeyColumn]],
    );
    data.map((record) => {
      selectData.value[record[rowKeyColumn]] = !allSelected;
    });
    !allSelected
      ? (selectCheckboxData.value = Object.keys(selectData.value))
      : (selectCheckboxData.value = []);
  }

  function setCurrentRow(rowKey: string) {
    selectRadioData.value = rowKey;
  }

  return {
    selectionColumn,
    originColumns,
    getSelectionRows,
    toggleRowSelection,
    toggleAllSelection,
    setCurrentRow,
  };
};
