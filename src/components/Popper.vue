<template>
  <etu-popper content="This is the Popper content 🍿" arrow hover>
    <button>PopperDemo</button>
  </etu-popper>
  <etu-popper ref="popperRef" arrow>
    <button>PopperDemo</button>
    <template #content>
      <div class="popper-checkbox">
        <etu-checkbox label="Option A" />
        <etu-checkbox label="Option B" />
        <etu-checkbox label="Option C" />
        <div>
          <button @click="confirm">确认</button>
          <button>重置</button>
        </div>
      </div>
    </template>
  </etu-popper>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const popperRef = ref(null);

const confirm = () => {
  popperRef.value?.doClose();
  console.log(1);
}
</script>

<style lang="scss" scoped>
.popper-checkbox {
  display: flex;
  flex-direction: column;
  .etu-checkbox {
    margin-bottom: 5px;
  }
}
</style>
