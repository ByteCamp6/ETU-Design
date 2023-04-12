<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  options: {
    type: Array,
    default: () => {
      return [];
    },
  },
});
const newOptions = ref(props.options);
const isOpen = (item: any) => {
  item.isOpened = !item.isOpened;
};
</script>

<script lang="ts">
export default {
  name: "EtuTree-node",
};
</script>

<style scoped lang="scss"></style>
