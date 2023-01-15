<template>
  <button :class="tClass">
    <slot></slot>
  </button>
</template>

<script setup lang="ts" name="EtuButton">
import { useNamespace } from "../../hooks";

const bem = useNamespace("button");
import { computed } from "vue";

const porps = defineProps({
  type: {
    type: String,
    default: "default",
  },
  Hollow: {
    Hollow: String,
    default: "solid",
  },
  Curvature: {
    Curvature: String,
    default: "Microcurvature",
  },
  shape: {
    shape: String,
    default: "rectangle",
  },
});
const tClass = computed(() => {
  return [
    "etuButton",
    // porps.type === "" ? "" : `baseButton-${porps.type}`,
    // porps.Hollow === "" ? "" : `baseButton-${porps.type}-${porps.Hollow}`
    `etuButton-${porps.type}-${porps.Hollow}-${porps.Curvature}-${porps.shape}`,
  ];
});
console.log(tClass);
</script>
