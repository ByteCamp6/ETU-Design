<template>
  <span :class="dropdownCls">
    <span style="">
      <button
        v-if="splitButton"
        style="border-radius: 5px 0 0 5px"
        :class="splitButton ? bgCls : []"
        @click="onButtonClick"
      >
        <slot name="default" />
      </button>

      <etu-popper
        arrow
        :hover="isTriggerHover"
        :canclePadding="true"
        :placement="placeMent"
      >
        <template v-if="splitButton">
          <button
            :class="splitButton ? bgCls : []"
            style="border-radius: 0 5px 5px 0"
          >
            <etu-icon v-if="splitButton" name="arrow-down-bold"></etu-icon>
          </button>
        </template>
        <span v-else
          ><slot name="default"></slot>
          <etu-icon v-if="isUseArrowDown" name="arrow-down-bold"></etu-icon
        ></span>

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
  </span>
</template>

<script setup lang="ts" name="EtuDropdown">
import EtuPopper from "@etu-design/components/popper/index";
import { useNamespace } from "@etu-design/hooks/index";
import etuScrollbar from "@etu-design/components/scrollbar";
import { dropDownProps, dropdownEmits } from "./dropdown";
import { provide } from "vue";
import { dropdownKey } from "@etu-design/tokens/dropdown";
import { useDropdownEvent } from "./use-dropdown-event";
import { useDropDownStyle } from "./use-dropdown-style";

const { Scrollbar: EtuScrollbar } = etuScrollbar;
const ns = useNamespace("dropdown");

const props = defineProps(dropDownProps);

defineEmits(dropdownEmits);
const {
  scrollbarMaxHeight,
  canclePadding,
  placeMent,
  isTriggerHover,
  isUseArrowDown,
} = useDropDownStyle(props);

const { handleMousedown, onButtonClick } = useDropdownEvent(props);
provide(dropdownKey, {
  handleMousedown,
});
const dropdownCls = [ns.b()];
const bgCls = [
  ns.b("button-group"),
  ns.bm("button-group", props.type),
  ns.bm("button-group", props.size),
];
</script>
