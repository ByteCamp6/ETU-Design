<template>
  <etu-select
    v-model="value1"
    placeholder="请选择内容"
    clearable
    filterable
    @change="fun"
    @visible-change="fun"
    @blur="fun"
    @focus="fun"
  >
    <etu-option
      v-for="item in options1"
      :key="item.label"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    ></etu-option>
  </etu-select>

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
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

function fun(res: any) {
  // console.log("自定义事件");
  // console.log(res);
}

const options1 = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];

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

interface ListItem {
  value: string;
  label: string;
}

const list = ref<ListItem[]>([]);
const options = ref<ListItem[]>([]);
const value1 = ref("Beijing");
const value = ref<string[]>(["Shanghai"]);
const loading = ref(false);

watch(
  () => value.value,
  (val) => {
    console.log(val);
  },
);

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
