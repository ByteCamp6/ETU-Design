<template>
  <div :class="ns.b()">
    <div :class="ns.e('wrapper')" :style="wrapperStyle">
      <div :class="ns.e('view')">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "EtuScrollbar",
};
</script>

<script setup lang="ts">
import { computed } from "vue";
import { useNamespace } from "@etu-design/hooks";
import { scrollbarProps } from "./scrollbar";

const props = defineProps(scrollbarProps);

const wrapperStyle = computed(() => {
  return {
    height:
      typeof props.height === "number" ? props.height + "px" : props.height,
    maxHeight:
      typeof props.height === "number" ? props.height + "px" : props.height,
  };
});

console.log(wrapperStyle);

const ns = useNamespace("scrollbar");
</script>
