<template>
  <span :class="ns.e('total')" :disabled="disabled">
    {{ `总计${props.total}条` }}
  </span>
</template>

<script lang="ts" setup name="EtuPaginationTotal">
import { useNamespace } from "@etu-design/hooks";
import { usePagination } from "../use-pagination";
import { paginationTotalProps } from "./total.ts";

const ns = useNamespace("pagination");
const { disabled } = usePagination();

const props = defineProps(paginationTotalProps);
</script>
