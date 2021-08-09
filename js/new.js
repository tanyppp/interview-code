export default function newConstructor(func, ...args) {
  if (typeof func !== "function") {
    return func;
  }

  const obj = {};
  const res = func.apply(obj, args);
  Object.setPrototypeOf(obj, func.prototype);

  return typeof res === "function" || (typeof res === "object" && res !== null)
    ? res
    : obj;
}
