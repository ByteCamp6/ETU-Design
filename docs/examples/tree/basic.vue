<template>
  <etu-tree :options="treeOptions"></etu-tree>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const inpVal = ref("");
const state = reactive({
  treeOptions: [
    {
      label: "一级",
      children: [
        {
          label: "一级-1",
        },
        {
          label: "一级-2",
          children: [
            {
              label: "一级-2-1",
            },
            {
              label: "一级-2-2",
            },
          ],
        },
      ],
    },
  ],
});
const { treeOptions } = state;
</script>

<style></style>
