import ajax from "./ajax.js";
import jsonp from "./jsonp.js";

ajax("get", "./index.html", "a=1").then((xhr) => {
  console.log(xhr);
});

jsonp(
  "https://suggest.taobao.com/sug",
  "callback",
  "code=utf-8&q=iphone&_ksTS=1628598782314_222&k=1&area=c2c&bucketid=0"
)
  .then(console.log)
  .catch(console.error);
