<template>
  <button
    type="button"
    class="btn-prev"
    :disabled="internalDisabled"
    @click="$emit('click', $event)"
  >
    <span v-if="props.prevText">{{ props.prevText }}</span>
    <etu-icon name="arrow-left-bold"></etu-icon>
  </button>
</template>

<script lang="ts" setup name="EtuPaginationPrev">
import { computed } from "vue";
import EtuIcon from "@etu-design/icon";
import { paginationPrevEmits, paginationPrevProps } from "./prev.ts";

const props = defineProps(paginationPrevProps);
defineEmits(paginationPrevEmits);

const internalDisabled = computed(
  () => props.disabled || props.currentPage <= 1,
);
</script>
