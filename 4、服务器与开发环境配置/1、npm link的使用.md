# npm link工具

* 方便本地调试
*  注意node版本是否一直
* 模块项目中使用 npm link 显示成功
* 业务项目中使用 npm link @kkb/fig-log-next  验证是否成功，打开node_module 查看有没有快捷方式
  显示如下：代表成功/Users/gaochao/kkb/homeup/node_modules/@kkb/fig-log-next -> /Users/gaochao/.nvm/versions/node/v14.15.4/lib/node_modules/@kkb/fig-log-next -> /Users/gaochao/kkb-cli/fig-log
* 业务项目使用时  需要 模块执行build操作 先打dist包
* 然后引入代码需要指向

import Log from '../../node_modules/@kkb/fig-log-next/dist/log';
