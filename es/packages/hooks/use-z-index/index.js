import { ref, computed } from "vue";
const zIndex = ref(0);
const useZIndex = () => {
  const initialZIndex = 2e3;
  const currentZIndex = computed(() => initialZIndex + zIndex.value);
  const nextZIndex = () => {
    zIndex.value++;
    return currentZIndex.value;
  };
  return {
    currentZIndex,
    nextZIndex
  };
};
export {
  useZIndex
};
