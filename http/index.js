function ajax(method = "get", url, data) {
  return new Promise((resolve, reject) => {
    method = method.toUpperCase();
    let xhr;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else {
      xhr = new ActiveXObject("Microsoft.XMLHttp");
    }

    if (method === "GET") {
      xhr.open(method, url + "?" + data, true);
      xhr.send();
    } else {
      xhr.open(method, url, true);
      xhr.send(data);
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr);
      }
    };
  });
}

function jsonp(url, callbackName, data) {
  return new Promise((resolve, reject) => {
    if (typeof data === "object") {
      data = Object.keys(data)
        .reduce((next, key) => {
          next.push(`${key}=${data[key]}`);

          return next;
        }, [])
        .join("&");
    }

    const script = document.createElement("script");
    const callback = `jsonp912381`;
    window[callback] = resolve;
    script.src = `${url}?${callbackName}=${callback}&${data}`;
    script.type = "application/javascript";
    script.onload = function () {
      delete window[callback];
      document.body.removeChild(script);
    };
    script.onabort = script.onerror = reject;
    document.body.appendChild(script);
  });
}

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
