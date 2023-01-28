<template>
  <div
    :class="[...optionClass]"
    @click="updateValue($event, props.value, props.label)"
  >
    <span>{{ props.label }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "EtuOption",
};
</script>

<script setup lang="ts">
import { inject, provide, watch, reactive } from "vue";
import { useNamespace } from "../../hooks";
import { optionProps } from "./option";
import { selectKey } from "../../tokens";
import type { SelectItem } from "./useSelect";
import { useSelect } from "./useSelect";

const store = useSelect();
const props = defineProps(optionProps);
const options = inject(selectKey);
const currentValue: Set<SelectItem> = store.getCurrentValue();

const updateValue = (e, value, label) => {
  const obj = new Object({ value, label });
  if (options.props.multiple) e.stopPropagation();
  if (props.disabled) return;
  store.addValue(obj);
};

watch(currentValue, () => {
  [...currentValue].some((item) => item.value === props.value)
    ? optionClass.add(nc.is("selected"))
    : optionClass.delete(nc.is("selected"));
});

const nc = useNamespace("select");

const optionClass = reactive(
  new Set([nc.be("dropdown", "item"), nc.is("disabled", props.disabled)]),
);
</script>
