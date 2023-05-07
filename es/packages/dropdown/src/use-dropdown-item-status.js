import { ref } from "vue";
const useDropDownItemStatus = (props) => {
  const isDisabled = ref(props.disabled || false);
  return {
    isDisabled,
  };
};
export { useDropDownItemStatus };
