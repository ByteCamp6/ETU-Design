<template>
  <button
    type="button"
    class="btn-next"
    :disabled="internalDisabled"
    @click="$emit('click', $event)"
  >
    <span v-if="props.nextText">{{ props.nextText }}</span>
    <etu-icon name="arrow-right-bold"></etu-icon>
  </button>
</template>

<script lang="ts" setup name="EtuPaginationNext">
import { computed } from "vue";
import EtuIcon from "@etu-design/icon";
import { paginationNextEmits, paginationNextProps } from "./next.ts";

const props = defineProps(paginationNextProps);

defineEmits(paginationNextEmits);

const internalDisabled = computed(
  () =>
    props.disabled ||
    props.currentPage === props.pageCount ||
    props.pageCount === 0,
);
</script>
