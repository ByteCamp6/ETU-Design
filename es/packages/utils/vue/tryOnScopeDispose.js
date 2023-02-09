import { getCurrentScope, onScopeDispose } from "vue";
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
export {
  tryOnScopeDispose
};
