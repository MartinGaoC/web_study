// CORS  跨域资源共享
// 简单请求
// 请求方法为gep post 或者head
// 请求头的取值范围 Accept、Accept-Language、Content-Language、Content-Type(只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain)
// 超过上方这个范围的都为非简单请求
// 服务器设置请求头 字段
// Access-Controle-Allow-Origin  允许控制访问源头，可以直接填*


// JSONP实现跨域
// 使用script标签，填写目标地址发出get请求完成跨域



// Nginx反向代理解决
// nginx相当于一个跳板机

// server{
//     listen: 80,
//     server_name: client.com; // 捕获客户端要代理的域名
//     location /api{
//         proxy_pass server.com // 转为服务器域名
//     }
// }