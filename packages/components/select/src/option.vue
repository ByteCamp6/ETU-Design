<template>
  <div
    v-show="select.isShow(props.label)"
    :class="optionClass"
    @click.stop="updateValue(props.value, props.label)"
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
import { inject, computed, onMounted } from "vue";
import { useNamespace } from "@etu-design/hooks";
import { optionProps } from "./option";
import { selectKey } from "@etu-design/tokens";

const props = defineProps(optionProps);
const select = inject(selectKey);

if (!props.disabled) {
  select.addValue(props.label);
}

const updateValue = (value, label) => {
  if (props.disabled) return;
  select.handlerClickOption({ value, label });
};
const nc = useNamespace("select");

const optionClass = computed(() => [
  nc.be("dropdown", "item"),
  nc.is("disabled", props.disabled),
  nc.is("selected", select.isSelected(props.value)),
]);

onMounted(() => {
  if (select.props.modelValue && !select.props.multiple) {
    if (!select.props.multiple) {
      if (select.props.modelValue === props.value) {
        updateValue(props.value, props.label);
      }
    } else {
      if (select.props.modelValue.contains(props.value)) {
        updateValue(props.value, props.label);
      }
    }
  }
});
</script>
