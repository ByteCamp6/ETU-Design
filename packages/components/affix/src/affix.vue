<template>
  <div :class="tClass" :style="affixStyle">
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="EtuAffix">
import { useNamespace } from "@etu-design/hooks";
import { computed } from "vue";
import { addUnit } from "@etu-design/utils";
import type { CSSProperties } from "vue";

const bem = useNamespace("Affix");
const props = defineProps({
  offset: {
    type: Number,
    default: 0,
  },
  position: {
    type: String,
    default: "top",
  },
  target: {
    type: String,
    default: "",
  },
  zIndex: {
    type: Number,
    default: 100,
  },
});
const tClass = computed(() => {
  return [bem.m(props.position)];
});
if (props.target !== "") {
  let Id = document.getElementById(String(props.target));
  if (Id != null && Id.style.transform !== "") {
    let ScaleNum = 0;
    Id.style.transform = `translate(${ScaleNum},${ScaleNum})`;
  }
}
const affixStyle = computed<CSSProperties>(() => {
  const offset = props.offset ? addUnit(props.offset) : 0;
  return {
    top: props.position === "top" ? offset + "px" : ``,
    bottom: props.position === "bottom" ? offset + "px" : "",
    right: props.position === "right" ? offset + "px" : "",
    left: props.position === "left" ? offset + "px" : "",
  };
});

// if (props.offset !== 0) {
//   if (props.position === "right") {
//     affixStyle.
//   }
// }
</script>
