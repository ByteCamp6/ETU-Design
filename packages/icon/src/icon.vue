<template>
  <i :class="classes">
    <slot></slot>
  </i>
</template>

<script lang="ts">
export default {
  name: "EtuIcon",
};
</script>

<script setup lang="ts">
import { computed } from "vue";
import { useNamespace } from "../../hooks";
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
  return `${bem.b()}-${name}`;
});
// console.log(classes);
</script>
