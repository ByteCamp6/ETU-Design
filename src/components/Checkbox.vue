<template>
  <button @click="disabled = !disabled">disabled</button>
  <etu-checkbox
    v-model="checked1"
    label="Option 1"
    :disabled="disabled"
  ></etu-checkbox>

  <etu-checkbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
    >Check all</etu-checkbox
  >
  <etu-checkbox-group
    v-model="checkList"
    @change="handleCheckedCitiesChange"
    :max="3"
    :min="2"
  >
    <etu-checkbox label="Option A" />
    <etu-checkbox label="Option B" />
    <etu-checkbox label="Option C" />
    <etu-checkbox label="selected and disabled" disabled />
  </etu-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const checked1 = ref(false);
const checkAll = ref(false);
const isIndeterminate = ref(true);
const disabled = ref(false);

const checkList = ref(["selected and disabled", "Option A"]);

const handleCheckAllChange = (val: boolean) => {
  checkList.value = val
    ? ["selected and disabled", "Option A", "Option B", "Option C"]
    : [];
  isIndeterminate.value = false;
};

const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === 4;
  isIndeterminate.value = checkedCount > 0 && checkedCount < 4;
};
</script>