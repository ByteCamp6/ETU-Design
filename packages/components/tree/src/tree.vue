<template>
  <li
    v-for="(item, index) in newOptions"
    :key="index"
    @click.stop="isOpen(item)"
  >
    {{ item.label }}
    <etu-checkbox v-show="item.showCheck === true"></etu-checkbox>
    <Transition name="slide-fade">
      <etu-tree-node
        v-show="item.isOpened"
        v-if="item.children && item.children.length"
      >
        <etu-tree :options="item.children"></etu-tree>
      </etu-tree-node>
    </Transition>
  </li>
  <!--  <etu-checkbox-->
  <!--    v-model="checkAll"-->
  <!--    :indeterminate="isIndeterminate"-->
  <!--    @change="handleCheckAllChange"-->
  <!--    v-for="(item, index) in newOptions"-->
  <!--    :key="index"-->
  <!--    @click.stop="isOpen(item)"-->
  <!--    :label="item.label"-->
  <!--  ></etu-checkbox>-->

  <!--  <etu-checkbox-group v-model="checkList" @change="handleCheckedCitiesChange">-->
  <!--  </etu-checkbox-group>-->
</template>

<script setup lang="ts">
import { ref } from "vue";
import EtuTreeNode from "./tree-node.vue";
const props = defineProps({
  options: {
    type: Array,
    default: () => {
      return [];
    },
  },
  showCheck: {
    type: Boolean,
    default: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
});
let isShow = ref(false);
let state = ref(props.showCheck);
console.log("state is " + state.value + "," + typeof state.value);
const newOptions = ref(props.options);
const isOpen = (item: any) => {
  item.isOpened = !item.isOpened;
};

const checkAll = ref(false);
const isIndeterminate = ref(true);
const disabled = ref(false);

const checkList = ref(["selected and disabled"]);

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

<script lang="ts">
export default {
  name: "EtuTree",
};
</script>

<style scoped lang="scss"></style>
