<template>
  <etu-form :model="form" label-width="120px">
    <etu-form-item label="Activity name">
      <etu-input v-model="form.name" />
    </etu-form-item>
    <etu-form-item label="Activity zone">
      <etu-select v-model="form.region" placeholder="please select your zone">
        <etu-option label="Zone one" value="shanghai" />
        <etu-option label="Zone two" value="beijing" />
      </etu-select>
    </etu-form-item>
    <etu-form-item label="Activity time">
      <etu-col :span="11">
        <etu-date-picker
          v-model="form.date1"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </etu-col>
      <etu-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </etu-col>
      <etu-col :span="11">
        <etu-time-picker
          v-model="form.date2"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </etu-col>
    </etu-form-item>
    <etu-form-item label="Instant delivery">
      <etu-switch v-model="form.delivery" size="small" />
    </etu-form-item>
    <etu-form-item label="Activity type">
      <etu-checkbox-group v-model="form.type">
        <etu-checkbox label="Online activities" name="type" />
        <etu-checkbox label="Promotion activities" name="type" />
        <etu-checkbox label="Offline activities" name="type" />
      </etu-checkbox-group>
    </etu-form-item>
    <etu-form-item label="Resources">
      <etu-radio-group v-model="form.resource">
        <etu-radio label="Sponsor" />
        <etu-radio label="Venue" />
      </etu-radio-group>
    </etu-form-item>
    <etu-form-item label="Activity form">
      <etu-input v-model="form.desc" type="textarea" />
    </etu-form-item>
    <etu-form-item>
      <etu-button type="primary" @click="onSubmit">Create</etu-button>
      <etu-button>Cancel</etu-button>
    </etu-form-item>
  </etu-form>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

// do not use same name with ref
const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

const onSubmit = () => {
  console.log("submit!");
};
</script>
