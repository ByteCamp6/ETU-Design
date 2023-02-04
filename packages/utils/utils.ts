export function _debounce(fn, wait) {
  let timer: number | null = null;
  return function (...args) {
    const context = this;

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

// 定时器
export function _throttle(fn, delay) {
  let timer: number | null = null;
  return function (...args) {
    const context = this;

    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args);
        timer = null;
      }, delay);
    }
  };
}
