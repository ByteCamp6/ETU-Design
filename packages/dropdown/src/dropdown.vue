<template>
  <span :class="dropdownCls">
    <etu-popper arrow hover :canclePadding="true">
      <slot></slot>
      <etu-icon name="arrow-down-bold"></etu-icon>

      <template #content>
        <EtuScrollbar
          :max-height="scrollbarMaxHeight"
          :canclePadding="canclePadding"
        >
          <slot name="dropdown" />
        </EtuScrollbar>
      </template>
    </etu-popper>
  </span>
</template>

<script setup lang="ts" name="EtuDropdown">
import EtuPopper from "@etu-design/popper/index";
import { useNamespace } from "@etu-design/hooks/index";
import etuScrollbar from "@etu-design/scrollbar";
import { dropDownProps } from "./dropdown";
import { useDropDownStyle } from "./use-dropdown-style";

const props = defineProps(dropDownProps);
const { scrollbarMaxHeight, canclePadding } = useDropDownStyle(props);
const { Scrollbar: EtuScrollbar } = etuScrollbar;
const ns = useNamespace("dropdown");
const dropdownCls = [ns.b()];
</script>
