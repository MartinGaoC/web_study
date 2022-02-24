# git 钩子 插件 husky


* 用途 commit的时候做代码校验，如果有问题就会停止 commit

  "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged",
      "commit-msg": "vcm"
    }
  },

# lint-staged

* 代码美化插件 搭配husky一起使用


  "lint-staged": {
    "*.{js,jsx}": [
      "pretty-quick --staged",
      "eslint --fix",
      "git add"
    ]
  },