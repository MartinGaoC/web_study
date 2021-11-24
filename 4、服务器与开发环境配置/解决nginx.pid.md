### 首先看报错
* 发现没有nginx.pid文件

* 在/opt/homebrew/var/run 下创建一个新的 nginx.pid文件
* touch nginx.pid
* 查看端口号 ps -ef | grep nginx
* 文件里写入端口  echo 761 < nginx.pid
* 重启发现端口被占用
* kill -9 761杀掉端口


* nginx 静态文件404解决方案， 修改默认的nginx端口为81