<template>
  <div :class="ns.b()">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "EtuCollapse",
};
</script>

<script setup lang="ts">
import { ref, reactive, provide } from "vue";
import type { Ref } from "vue";
import { useNamespace } from "@etu-design/hooks";
import { collapseProps, collapseEmits } from "./collapse";
import { collapseKey } from "@etu-design/tokens";

const props = defineProps(collapseProps);
const emit = defineEmits(collapseEmits);

const currentItem = reactive(new Map());

const hasExit = (name) => {
  return currentItem.has(name);
};

const clickItem = (name) => {
  emit("change", name);
  if (currentItem.has(name)) {
    currentItem.delete(name);
    return;
  }
  if (props.accordion) {
    currentItem.clear();
  }
  currentItem.set(name, 1);
};

provide(collapseKey, reactive({ clickItem, currentItem, hasExit }));
const ns = useNamespace("collapse");
</script>
