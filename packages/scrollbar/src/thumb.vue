<template>
  <div :class="barClass">
    <div :class="ns.e('thumb')" :style="thumbStyle"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useNamespace } from "@etu-design/hooks";
import { thumbProps } from "./thumb";
import { addUnit } from "@etu-design/utils";

const props = defineProps(thumbProps);

const distance = ref(0);

const barClass = computed(() => {
  return [
    ns.e("bar"),
    ns.is("vertical", props.vertical),
    ns.is("horizontal", !props.vertical),
  ];
});

const thumbStyle = computed(() => {
  return {
    width: !props.vertical ? props.size : "",
    height: props.vertical ? props.size : "",
    transform: `translateY(${props.move}%)`,
  };
});

const ns = useNamespace("scrollbar");
</script>
