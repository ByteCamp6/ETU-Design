<template>
  <span :class="classes" @click="handleClick">
    <span :class="ns.e('content')">
      <slot />
    </span>
  </span>
</template>

<script setup lang="ts" name="ETUTag">
import { computed } from "vue";
import { useNamespace } from "../../hooks";
import { tagEmits, tagProps } from "./tag.ts";

const props = defineProps(tagProps);
const emit = defineEmits(tagEmits);

const classes = computed(() => {
  const { type, size, effect, closable, round } = props;
  return [
    ns.b(),
    ns.is("closable", closable),
    ns.m(type),
    ns.m(size),
    ns.m(effect),
    ns.is("round", round),
  ];
});

const ns = useNamespace("tag");

const handleClick = (event: MouseEvent) => {
  emit("click", event);
};
</script>
