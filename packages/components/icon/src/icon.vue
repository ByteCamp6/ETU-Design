<template>
  <i :class="classes">
    <slot></slot>
  </i>
</template>

<script setup lang="ts" name="EtuIcon">
import { computed } from "vue";
import { useNamespace } from "@etu-design/hooks";
import { iconProps } from "./icon";
import type { CSSProperties } from "vue";

const bem = useNamespace("i");
const props = defineProps(iconProps);

// const style = computed<CSSProperties>(() => {
//   const { color } = props;
//   if (color) return {};
//   return {
//     "--color": color,
//   };
// });
const classes = computed(() => {
  const { name } = props;
  return [bem.b(name), bem.b()];
});
// console.log(classes);
</script>
