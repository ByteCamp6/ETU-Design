<template>
  <div>
    <h2>form组件</h2>
    <etu-form ref="form" :model="formData" :rules="rules">
      <etu-form-item label="名称" prop="name" :rules="rules.name">
        <etu-input v-model="formData.name"></etu-input>
      </etu-form-item>
      <etu-form-item>
        <etu-button @click="onSubmit">提交</etu-button>
      </etu-form-item>
    </etu-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, getCurrentInstance } from "vue";

const formData = reactive({ name: "" });
const rules = {
  name: [
    { required: "true", message: "请输入名称", trigger: "blur" },
    {
      min: 3,
      max: 6,
      message: "长度最大6位最小3位",
      trigger: ["blur", "change"],
    },
  ],
};
// @ts-ignore
const { proxy } = getCurrentInstance();

const onSubmit = (e) => {
  e.preventDefault();
  proxy.$refs.form.validate((valid) => {
    console.log("valid", valid);
  });
};
</script>
