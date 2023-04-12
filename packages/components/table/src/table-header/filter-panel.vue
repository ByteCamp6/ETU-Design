<template>
  <EtuPopper ref="PopperRef" :placement="placement">
    <span :class="ns.e('column-filter-trigger')">
      <EtuIcon name="arrow-down-bold"></EtuIcon>
    </span>
    <template #content>
      <EtuScrollbar :maxHeight="280">
        <div :class="ns.be('filter', 'content')">
          <EtuCheckboxGroup
            v-model="checkFilters"
            :class="ns.be('filter', 'checkbox-group')"
          >
            <EtuCheckbox
              v-for="filter in filters"
              :key="filter.value"
              :label="filter.value"
              >{{ filter.text }}</EtuCheckbox
            >
          </EtuCheckboxGroup>
          <div :class="ns.be('filter', 'button')">
            <button @click="handleConfirm">确认</button>
            <button @click="handleReset">重置</button>
          </div>
        </div>
      </EtuScrollbar>
    </template>
  </EtuPopper>
</template>

<script lang="ts" setup>
import { useNamespace } from "@etu-design/hooks";

import EtuPopper from "@etu-design/components/popper";
import EtuIcon from "@etu-design/components/icon";
import etuScrollbar from "@etu-design/components/scrollbar";
import etuCheckbox from "@etu-design/components/checkbox";
import { computed, ref } from "vue";
import type { TableColumnCtx } from "../table-column";
import { useTable } from "../use-table";

const { Checkbox: EtuCheckbox, CheckboxGroup: EtuCheckboxGroup } = etuCheckbox;
const { Scrollbar: EtuScrollbar } = etuScrollbar;

const ns = useNamespace("table");
const { changeFilterRules } = useTable();

const PopperRef = ref();
const checkFilters = ref([]);
const filters = computed(() => {
  return props.column.filterable!.filters;
});
const props = defineProps<{
  placement: string;
  column: TableColumnCtx<any>;
}>();

const hidden = () => {
  PopperRef.value.doClose();
};

const handleConfirm = () => {
  changeFilterRules(props.column.prop, checkFilters.value);
  hidden();
};

const handleReset = () => {
  checkFilters.value = [];
  changeFilterRules(props.column.prop, checkFilters.value);
  hidden();
};
</script>
