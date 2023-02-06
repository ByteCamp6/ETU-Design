<template>
  <span :class="ns.e('sizes')">
    <etu-select
      :model-value="innerPageSize"
      :disabled="props.disabled"
      :popper-class="props.popperClass"
      @update:modelValue="handleChange"
    >
      <etu-option
        v-for="item in innerPageSizes"
        :key="item"
        :value="item"
        :label="`${item}条/页`"
      />
    </etu-select>
  </span>
</template>

<script lang="ts" setup name="EtuPaginationSizes">
import { computed, ref, watch } from "vue";
import { isEqual } from "lodash-unified";
import select from "@etu-design/select";
import { usePagination } from "../use-pagination";
import { paginationSizesProps } from "./sizes.ts";
import { useNamespace } from "@etu-design/hooks";

const { Select: EtuSelect, Option: EtuOption } = select;

const props = defineProps(paginationSizesProps);
const emit = defineEmits(["page-size-change"]);
const ns = useNamespace("pagination");
const pagination = usePagination();
const innerPageSize = ref(props.pageSize!);

watch(
  () => props.pageSizes,
  (newVal, oldVal) => {
    if (isEqual(newVal, oldVal)) return;
    if (Array.isArray(newVal)) {
      const pageSize =
        newVal.indexOf(props.pageSize!) !== -1
          ? props.pageSize
          : props.pageSizes![0];
      emit("page-size-change", pageSize);
    }
  },
);

watch(
  () => props.pageSize,
  (newVal) => {
    innerPageSize.value = newVal!;
  },
);

const innerPageSizes = computed(() => props.pageSizes);

function handleChange(val: number) {
  console.log(345612);
  if (val !== innerPageSize.value) {
    innerPageSize.value = val;
    pagination.handleSizeChange?.(Number(val));
  }
}
</script>
