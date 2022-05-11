* 开始通过lighthouse/cli的方式 运行 lhci autorun 的方式跑绕了弯路

* 正确的方式是通过 lighthouse + chrome-launcher(模拟chrome环境插件)

* 然后碰到了PROTOCOL_TIMEOUT问题，解决方案增加缓存配置     chromeFlags: ['--headless', '--no-sandbox', '--disable-storage-reset', '--disable-dev-shm-usage'],


* PROTOCOL_TIMEOUT问题 解决 在chromeLauncher中增加port端口配置