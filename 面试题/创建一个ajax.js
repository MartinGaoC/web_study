let xhr = new XMLHttpRequest();

// 创建HTTP请求
xhr.open("GET", SERVER_URL, true)

xhr.onreadystatechange = function(){
  if(this.readyState !== 4 ) return;

  if(this.readyState === 200){
    handle(this.response)
  } else {
    console.error(this.statusText)
  }
}

xhr.onerror = function(){
  console.error(this.statusText)
}

// 设置请求头
xhr.responseType = "json"
xhr.setRequestHeader("Accept", "application/json");

// 发送Http请求

xhr.send(null)


// promise封装实现

function getJSON(url){
  let promise = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest()
    // 新建一个http请求
    xhr.open("GET", "/url", true)

    xhr.onreadystatechange = function () {
      if(this.readyState !== 4) return 
      if(this.status === 200){
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }

    xhr.onerror = function () {
      reject(new Error(this.statusText))
    }
    xhr.responseType("json");

    xhr.setRequestHeader('Accept', 'application/json')

    xhr.send(null)
  })
  return promise
}