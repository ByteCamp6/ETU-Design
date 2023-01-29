<template>
  <div :class="ns.b()">
    <span :class="ns.e('title')">{{ props.label }}</span>
    <slot />
    <span :class="ns.e('line')"></span>
  </div>
</template>

<script lang="ts">
export default {
  name: "EtuOptionGroup",
};
</script>

<script setup lang="ts">
import { useNamespace } from "@etu-design/hooks";
import { optionGroupProps } from "./optionGrop";

const props = defineProps(optionGroupProps);

const ns = useNamespace("select-option-group");
</script>
