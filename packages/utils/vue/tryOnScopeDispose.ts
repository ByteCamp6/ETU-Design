import { getCurrentScope, onScopeDispose } from "vue";

export function tryOnScopeDispose(fn: () => void) {
  // 如果有活跃的effect
  if (getCurrentScope()) {
    //在当前活跃的 effect 作用域上注册一个处理回调。该回调会在相关的 effect 作用域结束之后被调用
    //能代替onUmounted
    onScopeDispose(fn);
    return true;
  }
  return false;
}
