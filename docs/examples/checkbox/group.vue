<template>
  <EtuCheckboxGroup v-model="checkList">
    <EtuCheckbox label="Option A" />
    <EtuCheckbox label="Option B" />
    <EtuCheckbox label="Option C" />
    <EtuCheckbox label="disabled" disabled />
    <EtuCheckbox label="selected and disabled" disabled />
  </EtuCheckboxGroup>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const checkList = ref(["selected and disabled", "Option A"]);
</script>
