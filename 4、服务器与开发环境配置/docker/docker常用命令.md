* 根据dockerfile 构建镜像 docker build . -t 镜像名称
* 使用新的镜像运行容器 docker run --name source-map-server -d -p 6020:6020 source-map-server





* 启动容器 docker start 容器名
* 停止容器 docker stop 容器名
* 强行终止 docker kill 容器id
* 删除容器 docker rm 容器名
* 进入容器 docker attach 容器名
* 进入一个正在运行中的容器 docker container -exec -it 容器名/bin/sh