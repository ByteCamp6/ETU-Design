<template>
  <a
    :class="linkKls"
    :href="disabled || !href ? undefined : href"
    @click="handleClick"
  >
    <span v-if="$slots.default" :class="bem.e('inner')">
      <slot />
    </span>
    <!-- <slot v-if="$slots.icon" name="icon" /> -->
  </a>
</template>

<script setup lang="ts" name="EtuLink">
import { useNamespace } from "../../hooks/index";
import { linkEmits, linkProps } from "./link";

const props = defineProps(linkProps);
const emit = defineEmits(linkEmits);
const bem = useNamespace("link");
let linkKls = [
  bem.b(),
  bem.m(props.type),
  bem.is("disabled", props.disabled),
  bem.is("underline", props.underline && !props.disabled),
];
// console.log(linkKls, "!!");
function handleClick(event: MouseEvent) {
  if (!props.disabled) emit("click", event);
}
</script>
