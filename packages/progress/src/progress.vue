<template>
  <div :class="[ns.b(), ns.m(props.status)]">
    <div :class="ns.b('bar')">
      <div :class="ns.be('bar', 'outer')" :style="progressBarOuterStyle">
        <div :class="ns.be('bar', 'inner')" :style="progressBarInnerStyle">
          <div
            :class="ns.be('bar', 'innerText')"
            v-show="props.textInside && props.showText"
          >
            <span>{{ props.percentage + "%" }}</span>
          </div>
        </div>
      </div>
    </div>
    <div :class="ns.e('text')" v-show="!props.textInside && props.showText">
      <span v-show="props.status === ''">{{ props.percentage }}%</span>
      <etu-icon
        name="success"
        :class="ns.e('icon')"
        v-show="props.status === 'success'"
      ></etu-icon>
      <etu-icon
        name="error"
        :class="ns.e('icon')"
        v-show="props.status === 'danger'"
      ></etu-icon>
      <etu-icon
        name="prompt"
        :class="ns.e('icon')"
        v-show="props.status === 'warning'"
      ></etu-icon>
    </div>
  </div>
  <slot />
</template>

<script lang="ts">
export default {
  name: "EtuProgress",
};
</script>

<script lang="ts" setup>
import { useNamespace } from "@etu-design/hooks";
import { progressProps } from "./progress";
import { computed } from "vue";

const props = defineProps(progressProps);

const progressBarOuterStyle = computed(() => {
  return { height: props.strokeWidth + "px" };
});

const progressBarInnerStyle = computed(() => {
  return {
    width: props.percentage + "%",
    height: props.strokeWidth + "px",
  };
});

const ns = useNamespace("progress");
</script>
