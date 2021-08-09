let isFirst = true;
export default function curry(fn, ...args) {
  const fnArgsLen = fn.length;
  const argsLen = args.length;

  if (argsLen >= fnArgsLen) {
    if (isFirst) {
      return function () {
        return fn.apply(this, args);
      };
    } else {
      return fn.apply(this, args);
    }
  }

  return function (..._args) {
    isFirst = false;
    return curry(fn, ...args, ..._args);
  };
}
