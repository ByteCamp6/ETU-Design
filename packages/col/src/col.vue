<template>
  <div :class="colClassName">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "EtuCol",
};
</script>

<script lang="ts" setup>
import { computed } from "vue";
import { useNamespace } from "../../hooks";
import { colProps } from "./col";

const props = defineProps(colProps);
const bem = useNamespace("col");

let colClassName = computed(() => {
  // 默认样式和前缀
  let temp = bem.b();
  let className: any = [];
  props.span !== 0 ? className.push(`${temp}-${props.span}`) : "";

  // 偏移量
  props.offset !== 0 ? className.push(`${temp}-offset-${props.offset}`) : "";
  return className;
});
</script>

<style scoped></style>
