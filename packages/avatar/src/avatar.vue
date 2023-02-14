<template>
  <div :class="[ns.b(), ns.e(props.shape)]" :style="avatarStyle">
    <etu-icon
      :class="ns.e('icon')"
      :name="props.icon"
      v-if="props.icon"
    ></etu-icon>
    <img
      :src="props.src"
      :srcset="props.srcSet"
      :alt="props.alt"
      :style="imgStyle"
      @error="handleError"
      v-else-if="props.src"
    />
    <slot v-else />
  </div>
</template>

<script lang="ts">
export default {
  name: "EtuAvatar",
};
</script>

<script setup lang="ts">
import { computed } from "vue";
import { useNamespace } from "@etu-design/hooks";
import { avatarProps, avatarEmits } from "./avatar";

const props = defineProps(avatarProps);
const emit = defineEmits(avatarEmits);

const avatarStyle = computed(() => {
  return {
    "--etu-avatar-size": props.size + "px",
  };
});

const imgStyle = computed(() => {
  return {
    "object-fit": props.fit,
  };
});

function handleError(e: Event) {
  emit("error", e);
}

const ns = useNamespace("avatar");
</script>
