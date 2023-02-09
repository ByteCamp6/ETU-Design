function _debounce(fn, wait) {
  let timer = null;
  return function(...args) {
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
export {
  _debounce
};
