<template>
  <div :class="optionClass" @click="updateValue(props.value, props.label)">
    <span>{{ props.label }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "EtuOption",
};
</script>

<script setup lang="ts">
import { inject, provide } from "vue";
import { useNamespace } from "../../hooks";
import { optionProps } from "./option";
import { selectKey } from "../../tokens";

const props = defineProps(optionProps);

const options = inject(selectKey);

const updateValue = (value, label) => {
  if (props.disabled) return;
  options.setValue(value, label);
};

const nc = useNamespace("select");

const optionClass = [
  nc.be("dropdown", "item"),
  nc.is("disabled", props.disabled),
];
</script>
