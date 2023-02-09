<template>
  <thumb :move="moveX" :ratio="ratioX" :size="width" :always="always" />
  <thumb
    :move="moveY"
    :ratio="ratioY"
    :size="height"
    vertical
    :always="always"
  />
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useNamespace } from "@etu-design/hooks";
import { barProps } from "./bar";
import thumb from "./thumb.vue";

const props = defineProps(barProps);

const moveX = ref(0);
const moveY = ref(0);

const handleScroll = (wrap: HTMLDivElement) => {
  if (wrap) {
    const offsetHeight = wrap.offsetHeight - 4;
    const offsetWidth = wrap.offsetWidth - 4;

    moveY.value = ((wrap.scrollTop * 100) / offsetHeight) * props.ratioY;
    moveX.value = ((wrap.scrollLeft * 100) / offsetWidth) * props.ratioX;
  }
};

const ns = useNamespace("scrollbar");

defineExpose({
  handleScroll,
});
</script>
