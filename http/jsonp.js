export default function jsonp(url, callbackName, data) {
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
