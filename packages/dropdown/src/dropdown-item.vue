<template>
  <li v-if="divided" role="separator" :class="liCls" v-bind="$attrs" />
  <li :class="dropdownItemCls" @mouseover="">
    <slot />
  </li>
</template>

<script setup lang="ts" name="EtuDropdownItem">
import { useNamespace } from "@etu-design/hooks/index";
import { dropdownItemProps } from "./dropdown-item";
const props = defineProps(dropdownItemProps);

const ns = useNamespace("dropdown");
const dropdownItemCls = [ns.b("item"), ns.is("disabled", props.disabled)];
const liCls = [ns.bm("item", "divided")];
console.log(props, dropdownItemCls, "???");
</script>
