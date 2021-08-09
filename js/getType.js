export default function getType(o) {
  const reg = /^\[object (\w+)]$/;
  return Object.prototype.toString.call(o).match(reg)[1].toLowerCase();
}
