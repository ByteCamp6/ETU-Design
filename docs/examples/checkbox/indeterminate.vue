<template>
  <EtuCheckbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
    >Check all</EtuCheckbox
  >
  <EtuCheckboxGroup v-model="checkedCities" @change="handleCheckedCitiesChange">
    <EtuCheckbox v-for="city in cities" :key="city" :label="city"
      >{{ city }}
    </EtuCheckbox>
  </EtuCheckboxGroup>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const checkAll = ref(false);
const isIndeterminate = ref(true);
const checkedCities = ref(["Shanghai", "Beijing"]);
const cities = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];

const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? cities : [];
  isIndeterminate.value = false;
};
const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === cities.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
};
</script>
