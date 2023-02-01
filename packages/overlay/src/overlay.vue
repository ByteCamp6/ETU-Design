<template>
  <teleport to="body">
    <Transition name="slide-fade">
      <div
        v-if="isShow"
        @mousewheel.prevent="rollImg"
        @keyup.up.stop
        @keydown.down="showkey"
        @keyup.left.stop
        @keyup.right.stop
      >
        <div :class="tClass" @click="changeIsShow"></div>
        <!--        上面是遮罩层，点击遮罩层改变isShow的值，完成退出 -->
        <slot></slot>
      </div>
    </Transition>
  </teleport>
</template>

<script setup lang="ts" name="EtuOverlay">
import { useNamespace } from "../../hooks";
import { computed, ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: [Boolean],
    default: false,
  },
  value: {
    type: [Boolean, String, Number],
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const isShow = ref(props.modelValue);
watch(
  () => props.modelValue,
  () => {
    isShow.value = props.modelValue;
  },
);
function changeIsShow() {
  isShow.value = !isShow.value;
}
const bem = useNamespace("overlay");
// el-overlay
const tClass = computed(() => {
  return [bem.b()];
});
</script>

<script lang="ts">
export default {
  name: "EtuOverlay",
};
</script>

<style>
/* 不设置margin遮罩层遮罩的有间隙 */
html,
head,
body {
  margin: 0;
}
</style>
