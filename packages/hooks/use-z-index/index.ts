import { computed, ref } from "vue";

const zIndex = ref(0);

export const useZIndex = () => {
  const initialZIndex = 2000;
  const currentZIndex = computed(() => initialZIndex + zIndex.value);

  const nextZIndex = () => {
    zIndex.value++;
    return currentZIndex.value;
  };

  return {
    currentZIndex,
    nextZIndex,
  };
};
