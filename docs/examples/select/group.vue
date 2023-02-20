<template>
  <div style="height: 225px">
    <etu-select
      v-model="value"
      filterable
      remote
      placeholder="Please enter a keyword"
      remote-show-suffix
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <etu-option-group
        v-for="options in optionsGroup"
        :key="options.toString()"
        :label="options.label"
      >
        <etu-option
          v-for="item in options.options"
          :key="item.label"
          :label="item.label"
          :value="item.value"
        ></etu-option>
      </etu-option-group>
    </etu-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const value = ref("");
const optionsGroup = [
  {
    label: "Popular cities",
    options: [
      {
        value: "Shanghai",
        label: "Shanghai",
        disabled: true,
      },
      {
        value: "Beijing",
        label: "Beijing",
      },
    ],
  },
  {
    label: "City name",
    options: [
      {
        value: "Chengdu",
        label: "Chengdu",
      },
      {
        value: "Shenzhen",
        label: "Shenzhen",
      },
      {
        value: "Guangzhou",
        label: "Guangzhou",
      },
      {
        value: "Dalian",
        label: "Dalian",
      },
    ],
  },
];

const loading = ref(false);

const remoteMethod = (query: string) => {
  if (query) {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      options.value = list.value.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase());
      });
    }, 200);
  } else {
    options.value = [];
  }
};
</script>
i
