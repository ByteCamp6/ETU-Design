<template>
  <EtuCheckboxGroup v-model="checkedCities" :min="1" :max="2">
    <EtuCheckbox v-for="city in cities" :key="city" :label="city">{{
      city
    }}</EtuCheckbox>
  </EtuCheckboxGroup>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const checkedCities = ref(["Shanghai", "Beijing"]);
const cities = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];
</script>
