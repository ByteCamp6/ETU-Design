<template>
  <div ref="breadcrumb" :class="bem.b()">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "EtuBreadcrumb",
};
</script>

<script setup lang="ts" name="EtuBreadcrumb">
import { ref, provide } from "vue";
import { useNamespace } from "@etu-design/hooks";
import { breadcrumbProps } from "./breadcrumb";
import { breadcrumbKey } from "@etu-design/tokens";

const bem = useNamespace("breadcrumb");
const props = defineProps(breadcrumbProps);

provide(breadcrumbKey, props);
</script>
