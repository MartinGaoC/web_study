LPC(本地进程间通信)：1。使用child_process模块，共享内存和信号量

IPC(本地兼远程服务)：通过net模块。windows下用管道，unix下是传输数据包

RPC(远程服务)：通过net模块。unix下传输的是数据流