import { getCurrentInstance, computed } from "vue";
const useProp = (name) => {
  const vm = getCurrentInstance();
  return computed(() => {
    var _a;
    return ((_a = vm.proxy) == null ? void 0 : _a.$props)[name] ?? void 0;
  });
};
export {
  useProp
};
