* 首先 vim 无法下载 更新 镜像源头 sudo apt-get update
* 下载vim sudo apt-get install vim  执行vim 检查
* 然后 vim sudo apt install zsh 
* 查看是否安装成功  cat /etc/shells
* 切换zsh工具 cash -s /bin/zsh  发现要密码
* 修改验证密码方式 vim /etc/pam.d/chsh
* auth       required   pam_shells.so
* 改为
* auth       sufficient   pam_shells.so

