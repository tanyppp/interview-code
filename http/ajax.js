export default function ajax(method = "get", url, data) {
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
