<template>
  <div
    :class="[
      ns.b(),
      ns.is(`scrolling-${scrollingPosition}`),
      ns.m('enable-row-hover'),
    ]"
  >
    <div :class="ns.e('inner-wrapper')" :style="tableInnerStyle">
      <div ref="hiddenColumns" class="hidden-columns">
        <slot />
      </div>
      <div :class="ns.e('header-wrapper')" ref="headerWrapper">
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
          <TableColgroup></TableColgroup>
          <TableHeader></TableHeader>
        </table>
      </div>
      <div ref="bodyWrapper" :class="ns.e('body-wrapper')">
        <EtuScrollbar
          ref="scrollBarRef"
          :height="scrollbarHeight"
          :maxHeight="scrollbarMaxHeight"
          @scroll="bindScroll"
        >
          <table
            ref="tableBodyNativeRef"
            :class="ns.e('body')"
            cellspacing="0"
            cellpadding="0"
            border="0"
            :style="{
              width: '100%',
              tableLayout: 'fixed',
            }"
          >
            <TableColgroup></TableColgroup>
            <TableBody></TableBody>
          </table>
        </EtuScrollbar>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="EtuTable">
import { useNamespace } from "@etu-design/hooks";
import TableColgroup from "./tableColgroup.vue";
import { tableProps } from "./table.ts";
import { computed, provide } from "vue";
import { TableKey } from "@etu-design/tokens";
import TableHeader from "./table-header";
import TableBody from "./table-body";
import etuScrollbar from "@etu-design/components/scrollbar";
import { useTableColumn } from "./table-column";
import { useTableStyle } from "./use-table-style";
import { useTableData } from "./use-table-data";

const { Scrollbar: EtuScrollbar } = etuScrollbar;

const props = defineProps(tableProps);
const emit = defineEmits([
  "select",
  "select-all",
  "selection-change",
  "select-radio",
  "cell-click",
  "row-click",
  "header-click",
  "sort-change",
  "filter-change",
]);
const ns = useNamespace("table");

// 是否传入有效的row的key值
const hasKey = computed(() => {
  return props.columns?.some((column) => column.prop === props.rowKey);
});

const {
  originColumns,
  getSelectionRows,
  toggleRowSelection,
  toggleAllSelection,
  setCurrentRow,
} = useTableColumn(props, hasKey, emit);

const {
  sortingColumn,
  filterData,
  changeSortingColumn,
  changeFilterRules,
  clearSort,
} = useTableData(props, hasKey, emit);

const {
  tableInnerStyle,
  scrollbarHeight,
  scrollBarRef,
  scrollingPosition,
  bindScroll,
  scrollbarMaxHeight,
} = useTableStyle(props);

// @ts-ignore
provide(TableKey, {
  emit,
  hasKey,
  originColumns,
  data: filterData,
  rowClass: props.rowClass,
  sortingColumn,
  changeSortingColumn,
  changeFilterRules,
});

defineExpose({
  getSelectionRows,
  toggleRowSelection,
  toggleAllSelection,
  setCurrentRow,
  clearSort,
});
</script>
