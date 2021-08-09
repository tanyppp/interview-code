export default function clone(obj) {
  if (typeof obj !== "object" || obj === null) {
    // 非引用值
    return obj;
  }

  if (Object.prototype.toString.call(obj) === "[object Object]") {
    const clonedObj = {};
    Object.keys(obj).forEach((key) => {
      clonedObj[key] = clone(obj[key]);
    });

    return clonedObj;
  } else if (Array.isArray(obj)) {
    // 数组
    return obj.map(clone);
  } else {
    // 非对象、数组的形式，还没有处理，如map，set，date
    return obj;
  }
}
