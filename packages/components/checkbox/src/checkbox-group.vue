<template>
  <div :class="ns.b('group')">
    <slot />
  </div>
</template>

<script lang="ts" setup name="EtuCheckboxGroup">
import { computed, nextTick, provide, toRefs } from "vue";
import { checkboxGroupEmits, checkboxGroupProps } from "./checkbox-group.ts";
import { useNamespace } from "@etu-design/hooks";
import { checkboxGroupContextKey } from "@etu-design/tokens";
import type { CheckboxGroupValueType } from "./checkbox-group.ts";

const props = defineProps(checkboxGroupProps);
const emit = defineEmits(checkboxGroupEmits);
const ns = useNamespace("checkbox");

const changeEvent = async (value: CheckboxGroupValueType) => {
  emit("update:modelValue", value);
  await nextTick();
  emit("change", value);
};

const modelValue = computed({
  get() {
    return props.modelValue;
  },
  set(val: CheckboxGroupValueType) {
    changeEvent(val);
  },
});

// noinspection TypeScriptValidateTypes
provide(checkboxGroupContextKey, {
  ...toRefs(props),
  modelValue,
  changeEvent,
});
</script>
