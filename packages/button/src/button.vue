<template>
  <button :class="tClass">
    <slot> </slot>
  </button>
</template>

<script setup lang="ts" name="EtuButton">
import { useNamespace } from "../../hooks";

const bem = useNamespace("Button");
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
  circle: {
    disable: String,
    default: "false",
  },
  size: {
    size: String,
    default: "normal",
  },
});
// const tClass = computed(() => {
//   return [
//     "etuButton",
//     `etuButton-${porps.type}-${porps.Hollow}-${porps.Curvature}-${porps.shape}`,
//   ];
// });
const tClass = computed(() => {
  return [
    bem.be(porps.circle, porps.size),
    bem.bem(porps.type, porps.Hollow, porps.Curvature),
  ];
});
console.log(tClass);
</script>

<script lang="ts">
export default {
  name: "EtuButton",
};
</script>
