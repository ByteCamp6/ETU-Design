<template>
  <div>
    <etu-form ref="formRef" :model="formData" :rules="rules">
      <etu-form-item label="名称1" prop="name" :rules="rules.name">
        <etu-input v-model="formData.name"></etu-input>
      </etu-form-item>
      <etu-form-item label="名称2" prop="name1" :rules="rules.name1">
        <etu-input v-model="formData.name1"></etu-input>
      </etu-form-item>
      <etu-form-item>
        <etu-button @click.prevent="onSubmit" type="primary">提交</etu-button>
      </etu-form-item>
    </etu-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

const formRef = ref();
const formData = reactive({ name: "", name1: "" });
const rules = {
  name: [{ required: "true", message: "请输入名称", trigger: "blur" }],
  name1: [{ required: "true", message: "请输入名称", trigger: "blur" }],
};

const onSubmit = () => {
  const form = formRef.value;
  form?.validate((validate, errors) => {
    // console.log(validate, errors);
  });
};
</script>
