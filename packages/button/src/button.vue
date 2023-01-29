<template>
  <button :class="tClass" :disabled="state">
    <slot> </slot>
  </button>
</template>

<script setup lang="ts" name="EtuButton">
import { useNamespace } from "../../hooks";

const bem = useNamespace("Button");
import { computed, ref } from "vue";
const porps = defineProps({
  type: {
    type: String,
    default: "default",
  },
  disabled: {
    state: Boolean,
    default: false,
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
const state = ref(porps.disabled);
const tClass = computed(() => {
  return [
    bem.be(porps.circle, porps.size),
    bem.bem(porps.type, porps.Hollow, porps.Curvature),
    bem.e(porps.disabled),
  ];
});
</script>

<script lang="ts">
export default {
  name: "EtuButton",
};
</script>
