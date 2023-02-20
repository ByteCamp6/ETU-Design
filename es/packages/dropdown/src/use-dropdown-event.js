import { getCurrentInstance } from "vue";
const useDropdownEvent = (props) => {
  const { emit } = getCurrentInstance();
  const handleMousedown = (command, e) => {
    const arg = command ? [command, e] : [{}, e];
    emit("command", ...arg);
  };
  const onButtonClick = (e) => {
    emit("click", e);
  };
  return {
    handleMousedown,
    onButtonClick
  };
};
export {
  useDropdownEvent
};
