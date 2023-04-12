<template>
  <div :class="[ns.b(), ns.is('focus', collapse.hasExit(props.name))]">
    <div :class="ns.e('title')" @click="contentToggle">
      <span>{{ props.title }}</span
      ><etu-icon :class="ns.e('icon')" name="arrow-right-bold"></etu-icon>
    </div>
    <div :class="ns.e('content')" v-show="isShow">
      <div :class="ns.e('inner')" ref="inner">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "EtuCollapseItem",
};
</script>

<script setup lang="ts">
import { ref, computed, watch, inject, onMounted } from "vue";
import type { Ref } from "vue";
import { useNamespace } from "@etu-design/hooks";
import { collapseItemProps } from "./collapse-item";
import { collapseKey } from "@etu-design/tokens";

const props = defineProps(collapseItemProps);
const ns = useNamespace("collapse-item");
const collapse = inject(collapseKey);

const inner: Ref<HTMLDivElement | null> = ref(null);

const contentToggle = () => {
  collapse.clickItem(props.name);
};

const isShow = computed(() => {
  return collapse.hasExit(props.name);
});
</script>
