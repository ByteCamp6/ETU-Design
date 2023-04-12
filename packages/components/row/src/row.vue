<template>
  <div :class="classes" ref="rowRef">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "EtuRow",
};
</script>

<script lang="ts" setup>
import { computed, ref, onMounted } from "vue";
import { useNamespace } from "@etu-design/hooks";
import { rowProps } from "./row";

const props = defineProps(rowProps);
const bem = useNamespace("row");
const rowRef = ref();

const classes = computed(() => {
  const isFlex = props.type === "flex";
  const temp = isFlex ? bem.m("flex") : bem.b();
  const name = [temp];
  if (isFlex) {
    name.push(`etu-row-flex-justify-${props.justify}`);
    name.push(`etu-row-flex-align-${props.align}`);
  }
  return name;
});

// 设置 col 属性
const setColAttrs = () => {
  // 获取 row 下所有 col
  const row = rowRef.value.children || [];
  let len = row.length;
  if (len === 0) return;
  for (let i = 0; i < len; i++) {
    // 布局模式
    row[i].classList.add("etu-col");
    // Gutter 处理
    if (props.gutter !== 0 && len > 1) {
      if (i !== 0) row[i].style.paddingLeft = `${props.gutter}px`;
      if (i !== len - 1) row[i].style.paddingRight = `${props.gutter}px`;
    }
  }
};

onMounted(() => {
  setColAttrs();
});
</script>

<style scoped></style>
