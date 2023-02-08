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
          <table-body>列</table-body>
        </table>
        <!--        </el-scrollbar>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="EtuTable">
import { useNamespace } from "@etu-design/hooks";
import TableColgroup from "./tableColgroup.vue";
import { tableProps } from "./table.ts";
import { computed, provide, ref, watch } from "vue";
import { TableKey } from "@etu-design/tokens";
import TableHeader from "./table-header";
import TableBody from "./table-body";

const props = defineProps(tableProps);
const ns = useNamespace("table");

const originColumns = computed(() => props.columns);

//@ts-ignore
provide(TableKey, {
  originColumns,
  data: props.data,
});
</script>
