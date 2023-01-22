<template>
  <div :class="ns.b()">
    <div :class="ns.e('image')">
      <slot v-if="$slots.image" name="image"></slot>
      <img v-else-if="props.image" :src="props.image" :style="imageStyle" />
      <svg
        v-else
        x="1674394526690"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="10441"
        width="200"
        height="200"
      >
        <path
          d="M839.2 101.3H184.9L65.3 539.5 64 922.7h896V549.3l-120.8-448zM241.9 176h540.3L884 549.3H678.7l-74.7 112H420l-74.7-112H140.1L241.9 176z"
          p-id="10442"
        ></path>
      </svg>
    </div>
    <div :class="ns.e('description')">
      <slot v-if="$slots.description" name="description" />
      <p v-else>{{ props.description }}</p>
    </div>
    <div v-if="$slots.default" :class="ns.e('bottom')">
      <slot />
    </div>
  </div>
</template>

<script setup name="EtuEmpty">
import { computed } from "vue";

import { useNamespace } from "@etu-design/hooks";
import { emptyProps } from "./empty.ts";

const props = defineProps(emptyProps);

const ns = useNamespace("empty");

const imageStyle = computed(() => ({
  width: props.imageSize ? `${props.imageSize}px` : "",
}));
</script>
