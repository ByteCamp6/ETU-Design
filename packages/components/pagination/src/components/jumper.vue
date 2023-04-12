<template>
  <span :class="ns.e('jump')" :disabled="disabled">
    <span :class="[ns.e('goto')]">跳转至</span>
    <etu-input
      :class="[ns.e('editor'), ns.is('in-pagination')]"
      :min="1"
      :max="pageCount"
      :disabled="disabled"
      :model-value="innerValue"
      type="number"
      @update:model-value="handleInput"
      @change="handleChange"
    />
    <span :class="[ns.e('classifier')]"></span>
  </span>
</template>

<script lang="ts" setup name="EtuPaginationJumper">
import { computed, ref } from "vue";
import { usePagination } from "../use-pagination";
import { useNamespace } from "@etu-design/hooks";
import EtuInput from "@etu-design/components/input";

const ns = useNamespace("pagination");
const { pageCount, disabled, currentPage, changeEvent } = usePagination();
const userInput = ref<number>();
const innerValue = computed(() => userInput.value ?? currentPage?.value);

function handleInput(val: number | string) {
  userInput.value = +val;
}

function handleChange(val: number | string) {
  // 删除小数
  val = Math.trunc(+val);
  // 修改currentPage的值
  changeEvent?.(+val);

  userInput.value = undefined;
}
</script>
