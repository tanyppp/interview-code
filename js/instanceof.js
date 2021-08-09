export default function instanceofFn(obj, fn) {
  while (obj !== null) {
    if (obj === fn.prototype) {
      return true;
    }
    obj = Object.getPrototypeOf(obj);
  }

  return false;
}
