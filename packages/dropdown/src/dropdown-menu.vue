<template>
  <ul :class="dropdownMenuCls">
    <slot />
  </ul>
</template>

<script setup lang="ts" name="EtuDropdownMenu">
import { useNamespace } from "@etu-design/hooks/index";
const ns = useNamespace("dropdown");
const dropdownMenuCls = [ns.b("menu")];
</script>
