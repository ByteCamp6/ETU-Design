<template>
  <span :class="classes" @click="handleClick">
    <span :class="ns.e('content')">
      <slot />
    </span>
    <!-- <etu-icon
      name="close"
      v-if="props.closable"
      :class="ns.e('close')"
      @click.stop="handleClose"
    /> -->
  </span>
</template>

<script setup lang="ts" name="EtuTag">
import { computed } from "vue";
// import EtuIcon from "@etu-design/icon";
import { useNamespace } from "../../hooks";
import { tagEmits, tagProps } from "./tag";

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

const handleClose = (event: MouseEvent) => {
  emit("click", event);
};
</script>
