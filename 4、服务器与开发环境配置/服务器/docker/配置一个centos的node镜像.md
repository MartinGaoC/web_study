* docker pull centos
* yum install node.js
* npm global install yarn
* npm install n 下载n版本管理工具
* n node/16.5.0 切换版本


* 3.1 查看 node 当前安装路径

* $ which node
* /usr/local/bin/node #举个例子
* 3.2 而 n 默认安装路径是 /usr/local，若你的 node 不是在此路径下，n 切换版本就不能把bin、lib、include、share 复制该路径中，所以我们必须通过N_PREFIX变量来修改 n 的默认node安装路径。
* 编辑环境配置文件：

* $  vim ~/.bash_profile
* 3.3 将下面两行代码插入到文件末尾：

* export N_PREFIX=/usr/local #node实际安装位置
* export PATH=$N_PREFIX/bin:$PATH

* yum install -g wget

* 下载谷歌浏览器
* wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
