import { ref, unref } from "vue";
import type { Ref } from "vue";
import { tryOnScopeDispose } from "@etu-design/utils";

/**
 * @description useTimeoutFn是一个使用setTimeout的hooks，传入的cb是回调函数，
 * 在计时结束后触发，interval是计时的时间，options中可以传immediate表示是否立即开始计时，
 * 默认使用hooks立即计时
 * 返回值中isPend判断是否在计时状态
 * start和stop可以手动控制计时器的进行情况，start新建一个计时器，stop终止当前计时器，不会暂停
 * tryOnScopeDispose可以近似理解为onUnmounted
 */
export const useTimeoutFn = (
  cb: (...args: any) => void, // 回调
  interval: Ref<number> | number, // 时间
  options: {
    immediate?: boolean;
  } = {},
) => {
  const { immediate = true } = options;

  const isPending = ref(false);

  let timer: number | null;

  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function stop() {
    isPending.value = false;
    clear();
  }

  function start(...args: any[]) {
    // 清除上一次定时器
    clear();
    // 是否在pending 状态
    isPending.value = true;
    // 重新启动定时器
    timer = setTimeout(() => {
      // 当定时器执行的时候结束pending状态
      isPending.value = false;
      // 初始化定时器的id
      timer = null;
      // 执行回调
      cb(...args);
    }, unref(interval));
  }
  if (immediate) {
    isPending.value = true;

    start();
  }

  tryOnScopeDispose(stop);

  return {
    isPending,
    start,
    stop,
  };
};
