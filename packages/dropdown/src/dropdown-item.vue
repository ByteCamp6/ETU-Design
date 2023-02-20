<template>
  <li v-if="divided" role="separator" :class="liCls" v-bind="$attrs" />
  <li :class="dropdownItemCls" @click="handleMousedownitem">
    <slot />
  </li>
</template>

<script setup lang="ts" name="EtuDropdownItem">
import { useNamespace } from "@etu-design/hooks/index";
import { dropdownItemProps } from "./dropdown-item";
import { inject } from "vue";
import { dropdownKey } from "@etu-design/tokens/dropdown";
import { useDropDownItemStatus } from "./use-dropdown-item-status";
const props = defineProps(dropdownItemProps);

const ns = useNamespace("dropdown");
const dropdownItemCls = [ns.b("item"), ns.is("disabled", props.disabled)];
const liCls = [ns.bm("item", "divided")];
const { isDisabled } = useDropDownItemStatus(props);
const { handleMousedown } = inject(dropdownKey, undefined);
const handleMousedownitem = function (e: Event) {
  if (isDisabled.value) return;
  handleMousedown.call(this, props.command, e);
};
defineExpose({
  isDisabled,
});
</script>
