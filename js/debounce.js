export default function debounce(fn, wait = 300) {
  let timer;

  return function () {
    timer != null && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  };
}
