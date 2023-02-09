import type { VNodeChild } from "vue";

export interface TableSortable<T> {
  sorter: (a: T, b: T) => number;
  sortDirections: ("ascend" | "descend")[];
}

export interface TableFilterData {
  text: string;
  value: string;
}

export interface TableFilterable<T> {
  filters: TableFilterData[];
  filter: (value: string, record: T) => boolean;
  multiple: boolean;
}

export interface TableColumnCtx<T> {
  label: string;
  prop: string;
  width?: string | number;
  align?: "left" | "center" | "right";
  headerAlign?: "left" | "center" | "right";
  sortable?: TableSortable<T>;
  filterable?: TableFilterable<T>;
  headerRender?: (data: {
    column: TableColumnCtx<T>;
    columnIndex: number;
  }) => VNodeChild;
  cellRender?: (data: {
    cellData: any;
    record: T;
    column: TableColumnCtx<T>;
    rowIndex: number;
    columnIndex: number;
  }) => VNodeChild;
}

export interface TableData {
  key: string;
  [otherKey: string]: any;
}
