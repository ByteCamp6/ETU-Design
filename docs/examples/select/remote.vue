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
      <etu-option
        v-for="item in options"
        :key="item.label"
        :label="item.label"
        :value="item.value"
      ></etu-option>
    </etu-select>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
interface ListItem {
  value: string;
  label: string;
}

const list = ref<ListItem[]>([]);
const options = ref<ListItem[]>([]);
const value = ref("Beijing");
const loading = ref(false);

onMounted(() => {
  list.value = states.map((item) => {
    return { value: `value:${item}`, label: `label:${item}` };
  });
});

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

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
</script>
