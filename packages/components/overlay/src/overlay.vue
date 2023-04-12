<template>
  <div
    v-show="props.modelValue"
    :class="tClass"
    :style="tStyle"
    @click="overlayEvent.onClick"
    @mousedown="overlayEvent.onMousedown"
    @mouseup="overlayEvent.onMouseup"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="EtuOverlay">
import { useNamespace, useSameTarget } from "@etu-design/hooks";
import { computed } from "vue";
import { overlayEmits, overlayProps } from "./overlay.ts";

const props = defineProps(overlayProps);
const emit = defineEmits(overlayEmits);

const bem = useNamespace("overlay");

const onMaskClick = (e: MouseEvent) => {
  emit("click", e);
};

const overlayEvent = useSameTarget(props.maskEvent ? undefined : onMaskClick);

const tClass = computed(() => {
  return [bem.b()];
});

const tStyle = computed(() => {
  return {
    zIndex: props.zIndex,
  };
});
</script>
