error /Users/gaochao/kkb/homeup/node_modules/sharp: Command failed.
Exit code: 1
Command: (node install/libvips && node install/dll-copy && prebuild-install) || (node-gyp rebuild && node install/dll-copy)
Arguments:
Directory: /Users/gaochao/kkb/homeup/node_modules/sharp
Output:
info sharp Downloading https://github.com/lovell/sharp-libvips/releases/download/v8.10.5/libvips-8.10.5-darwin-arm64v8.tar.br
ERR! sharp Prebuilt libvips 8.10.5 binaries are not yet available for darwin-arm64v8
info sharp Attempting to build from source via node-gyp but this may fail due to the above error
info sharp Please see https://sharp.pixelplumbing.com/install for required dependencies
gyp info it worked if it ends with ok
gyp info using node-gyp@5.1.0
gyp info using node@14.15.4 | darwin | arm64
gyp info find Python using Python version 3.9.7 found at "/opt/homebrew/opt/python@3.9/bin/python3.9"
gyp info spawn /opt/homebrew/opt/python@3.9/bin/python3.9
gyp info spawn args [
gyp info spawn args   '/Users/gaochao/.nvm/versions/node/v14.15.4/lib/node_modules/npm/node_modules/node-gyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/Users/gaochao/kkb/homeup/node_modules/sharp/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/Users/gaochao/.nvm/versions/node/v14.15.4/lib/node_modules/npm/node_modules/node-gyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/Users/gaochao/Library/Caches/node-gyp/14.15.4/include/node/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/Users/gaochao/Library/Caches/node-gyp/14.15.4',
gyp info spawn args   '-Dnode_gyp_dir=/Users/gaochao/.nvm/versions/node/v14.15.4/lib/node_modules/npm/node_modules/node-gyp',
gyp info spawn args   '-Dnode_lib_file=/Users/gaochao/Library/Caches/node-gyp/14.15.4/<(target_arch)/node.lib',
gyp info spawn args   '-Dmodule_root_dir=/Users/gaochao/kkb/homeup/node_modules/sharp',
gyp info spawn args   '-Dnode_engine=v8',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.'
gyp info spawn args ]
gyp info spawn make
gyp info spawn args [ 'BUILDTYPE=Release', '-C', 'build' ]
  CC(target) Release/obj.target/nothing/../node-addon-api/nothing.o
  LIBTOOL-STATIC Release/nothing.a
warning: /Library/Developer/CommandLineTools/usr/bin/libtool: archive library: Release/nothing.a the table of contents is empty (no object file members in the library define global symbols)
  TOUCH Release/obj.target/libvips-cpp.stamp
  CXX(target) Release/obj.target/sharp/src/common.o
../src/common.cc:24:10: fatal error: 'vips/vips8' file not found
#include <vips/vips8>
         ^~~~~~~~~~~~
1 error generated.
make: *** [Release/obj.target/sharp/src/common.o] Error 1
gyp ERR! build error
gyp ERR! stack Error: `make` failed with exit code: 2
gyp ERR! stack     at ChildProcess.onExit (/Users/gaochao/.nvm/versions/node/v14.15.4/lib/node_modules/npm/node_modules/node-gyp/lib/build.js:194:23)
gyp ERR! stack     at ChildProcess.emit (events.js:315:20)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:277:12)
gyp ERR! System Darwin 21.0.1
gyp ERR! command "/Users/gaochao/.nvm/versions/node/v14.15.4/bin/node" "/Users/gaochao/.nvm/versions/node/v14.15.4/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
gyp ERR! cwd /Users/gaochao/kkb/homeup/node_modules/sharp



## 上边是错误信息

# 初步判断是因为sharp包导致的报错
# sharp是一个node.js用来处理图像的工具，剪辑裁剪等

* 解释链接 https://cloud.tencent.com/developer/article/1418083

# 解决方案
* 删除sharp包，手动安装是因为想控制sharp的版本，卸载sharp包后问题解决，但是需要next.js版本在10.3以上