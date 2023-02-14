import { getCurrentInstance } from "vue";
const useCheckboxEvent = (props, {
  model,
  isLimitExceeded,
  hasOwnLabel,
  isDisabled
}) => {
  const { emit } = getCurrentInstance();
  function handleChange(e) {
    if (isLimitExceeded.value)
      return;
    const target = e.target;
    emit("change", target.checked, e);
  }
  return {
    handleChange
  };
};
export {
  useCheckboxEvent
};
