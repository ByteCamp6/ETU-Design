<template>
  <div
    :class="optionClass"
    @click.stop="updateValue($event, props.value, props.label)"
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
import { inject, provide, watch, reactive, computed, nextTick } from "vue";
import { useNamespace } from "../../hooks";
import { optionProps } from "./option";
import { selectKey } from "../../tokens";

const props = defineProps(optionProps);
const select = inject(selectKey);

const updateValue = (e, value, label) => {
  if (props.disabled) return;
  select.handlerClickOption({ value, label });
};
const nc = useNamespace("select");

const optionClass = computed(() => [
  nc.be("dropdown", "item"),
  nc.is("disabled", props.disabled),
  nc.is("selected", select.isSelected(props.value)),
]);
</script>
