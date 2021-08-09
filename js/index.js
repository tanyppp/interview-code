import clone from "./clone.js";
import newConstructor from "./new.js";
import instanceofFn from "./instanceof.js";
import extend from "./extend.js";
import getType from "./getType.js";
import debounce from "./debounce.js";
import throttle from "./throttle.js";
import curry from "./curry.js";

// clone
const obj1 = [
  {
    a: {
      aa: {
        aaa: 1,
      },
    },
  },
];

const obj2 = clone(obj1);

// false
console.log(obj1, obj2, obj1[0].a.aa === obj2[0].a.aa);

// new
const A = function (value = "a") {
  this.value = value;
  this.changeValue = function (value = "a") {
    this.value = value;
  };
};

const a = newConstructor(A, "a");
a.changeValue("aa");
console.log(a);

const B = function (t) {
  switch (t) {
    case 0:
      return 1;
    case 1:
      return "1";
    case 2:
      return true;
    case 3:
      return null;
    case 4:
      return Symbol(1);
    case 5:
      return { name: "inner" };
    case 6:
      return [{ name: "inner" }];
    case 7:
      return new Function();
    case 8:
      return new Map();
    case 9:
      return new Set();
  }
};
for (let i = 0; i < 10; i++) {
  console.log("1", newConstructor(B, i));
  console.log("2", new B(i));
}

// instanceof
const C = function () {};
const c = new C();
console.log(c instanceof C, c instanceof Object);
console.log(instanceofFn(c, C), instanceofFn(c, Object));

// 继承
const D = function (value = "d") {
  this.value = value;
};
D.prototype.getValue = function () {
  return this.value;
};

const ExtendedD = function () {
  D.apply(this, arguments);
};
extend(D, ExtendedD);
const d = new ExtendedD("ExtendedD");
console.log(d.getValue(), d);

// 类型判断
const typesArr = [
  {
    type: "number",
    value: 1,
  },
  {
    type: "string",
    value: "1",
  },
  {
    type: "boolean",
    value: true,
  },
  {
    type: "symbol",
    value: Symbol("1"),
  },
  {
    type: "null",
    value: null,
  },
  {
    type: "undefined",
    value: undefined,
  },
  {
    type: "function",
    value: new Function(),
  },
  {
    type: "object",
    value: {},
  },
  {
    type: "array",
    value: [],
  },
  {
    type: "map",
    value: new Map(),
  },
  {
    type: "set",
    value: new Set(),
  },
  {
    type: "date",
    value: new Date(),
  },
  {
    type: "regexp",
    value: new RegExp(),
  },
];
typesArr.forEach((item) => {
  const realType = getType(item.value);
  console.log(item.type, realType, item.type === realType);
});

// 防抖节流
debounceIpt.oninput = debounce(function () {
  console.log(this.value, this);
}, 1000);
throttleBtn.onclick = throttle(function () {
  console.log("throttle", this);
}, 1000);

// 柯里化
const example = function (a, b, c) {
  return a + b + c;
};
const curryExample = curry(example);
const curryExample1 = curry(example, 1);
const curryExample2 = curry(example, 1, 2, 3);
console.log(
  curryExample(1, 2, 3),
  curryExample(1)(2, 3),
  curryExample(1)(2)(3),
  curryExample1(2, 3),
  curryExample1(2)(3),
  curryExample2()
);
