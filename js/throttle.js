export default function throttle(fn, wait = 300) {
  let start = -Infinity,
    end = 0;

  return function () {
    end = Date.now();
    if (end - start < wait) {
      return;
    }
    start = Date.now();

    fn.apply(this, arguments);
  };
}
