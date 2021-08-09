export default function extend(origin, target) {
  const Temp = function () {};
  Temp.prototype = origin.prototype;
  target.prototype = new Temp();
  target.prototype.uber = origin;
  target.prototype.constructor = target;

  return target;
}
