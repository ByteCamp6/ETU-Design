import type { PropType } from "vue";
import { definePropType } from "@etu-design/utils";
import type { TableColumnCtx } from "./table-column/defaults";

export type ClassName = string | any[] | Record<string, any>;

export interface TableRowSelection {
  type: "checkbox" | "radio";
  title?: string;
  width?: number;
  showCheckedAll?: boolean;
}

export interface TableProps<T> {
  columns: TableColumnCtx<T>[];
  data: T[];
  stripe?: boolean;
  rowKey?: string;
  showHeader?: boolean;
  height?: string | number;
  maxHeight?: string | number;
  rowSelection?: TableRowSelection;
  selectedKeys?: (string | number)[];
  rowClass?: ClassName | ((data: { record: T; rowIndex: number }) => any);
}

export const tableProps = {
  columns: {
    type: definePropType<TableColumnCtx<any>[]>(Array),
    default: () => [],
    required: true,
  },
  data: {
    type: definePropType<any[]>(Array),
    default: () => [],
    required: true,
  },
  stripe: Boolean,
  rowKey: {
    type: String as PropType<TableProps<any>["rowKey"]>,
    default: "key",
  },
  showHeader: {
    type: Boolean,
    default: true,
  },
  width: [String, Number],
  height: [String, Number],
  rowSelection: {
    type: definePropType<TableRowSelection>(Object),
  },
  selectedKeys: {
    type: definePropType<(string | number)[]>(Array),
  },
  rowClass: {
    type: definePropType<TableProps<any>["rowClass"]>([
      String,
      Array,
      Object,
      Function,
    ]),
  },
} as const;
