## PM2

* pm2 是一个带有负载均衡功能的node应用进程管理器，
* 作用： 当程序出现错误死掉之后需要能够自动启动，进程管理工具还有很多，例如 forever等等

### 依据什么重启服务
* pm2 采用心跳检测查看子进程是否处于活跃状态，每隔数秒向子进程发送心跳包。如果不回复，就调用kill杀死这个进程，然后重新cluster.fork()一个新进程

### 拥有的能力
* 日志管理
* 负载均衡
* 终端监控
* SSH部署
* 静态服务
* 支持开发调试模式



常用命令
启动服务pm2 start <script_file|config_file> [options]启动指定应用

启动一个 node 程序
pm2 start app.js 启动 app.js 应用

启动进程并指定应用的程序名
pm2 start app.js --name 程序名启动应用并设置 name

添加进程监视 监听模式启动，当文件发生变化，自动重启
pm2 start app.js --name 程序名 --watch (指定程序名的情况下)

pm2 start app.js --watch (未指定程序名的情况下)

列出所有进程
pm2 list 简写成 pm2 ls

从进程列表中删除进程
pm2 delete [appname] | id

pm2 delete app 指定进程名删除

pm2 delete 0 指定进程 id 删除

如果修改了应用配置行为，需要先删除应用，重新启动后方才会生效,如修改脚本入口文件

删除进程列表中所有进程
pm2 delete all (关闭并删除应用)

直看某个进程具体情况
pm2 describe app

查看进程的资源消耗情况
pm2 monit (监控各个应用进程 cpu 和 memory 使用情况)

重启进程
pm2 restart app.js 同时杀死并重启所有进程，短时间内服务不可用，生成环境后慎用

pm2 restart all 重启所有进程

pm2 reload app.js 重新启动所有进行程，0 秒重启，始终保持至少一个进程在运行

pm2 gracefulReload all 以群集横式重新加载所有应用程序

查看进程日志
pm2 log3 [Name]根据指定应用名查看应用志

pm2 logs [ID] 根据指定应用 ID 查看应用日志

pm2 logs all 查看所有进程的日志

显示应用程序详细信息
pm2 show <appName>[options]显示指定应用详情

pm2 show [Name] 根据 name 查看

pm2 show [ID] 根据 id 查看

停止指定应用
pm2 stop <appName> [options] 停止指定应用

pm2 stop all 停止所有应用
pm2 stop [AppName] 根据应用名停止指定应用

pm2 stop [ID] 根据应用 id 停止指定应用

pm2 kill 杀掉 pm2 管理的所有进程

启动静态服务器
pm2 serve ./dist 8080 将目录 dist 作为静态服务器根目录，端口为 8080

集群模式启动
-i 表示 number-instances 实例数量

max 表示 pm2 将自动检测可用 CPU 的数量 可以自己指定数量

pm2 start app.js -i max 启用群集模式(自动负载均衡)

pm2-dev start … 开发模式启动，即不启用后台运行

设置 pm2 开机自启
开启启动设置，此处是 CentOS 系统，其他系统替换最后一个选项(可选项: ubuntu,centos, redhat, gentoo, systemd, darwin,amazon )

pm2 startup centos 然后按照提示需要输入的命令进行输入

最后保存设置 pm2 save