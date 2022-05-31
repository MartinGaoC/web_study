(function(window,document){
    var jsonp = function (url, data, callback){

        // 1、把传入的data数据转化为url字符串的形式
        // {id:1,name:'jack'} => id=1&name=jack
        var dataString = url.indexof('?') == -1 ? '?' : '&';
        for(var key in data) {
            dataString += key + '=' + data[key] + '&'
        }

        // 2、处理URL中的回调参数
        var cbFuncName = 'my_json_cb_' + Math.random().toString().replace('.', '');


        // 3、 创建一个script标签并插入到页面中
        var scriptEle = document.createElement('script');
        scriptEle.src = url + dataString;

        // 4.挂载回调函数
        window[cbFuncName] = function (data) {
            callback(data);
            // 处理完回调函数的数据之后，删除jsonp的script标签
            document.body.removeChild(scriptEle);
        }

        document.body.appendChild(scriptEle);
    }
    window.$jsonp = jsonp;

})(window, document)