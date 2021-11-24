
const path = require('path');

module.exports = {
    // entry: './src/index.js', // 单入口
    entry: {
        app: './src/app.js',
        adminApp: './src/adminApp.js'
    },
    output: {
        // filename: 'main.js',
        path: path.join(__dirname, 'dist'), // 指定目录
        filename: '[name].js',
        clean: true  // 每次打包晴空dist目录

    },
    module: { // 处理各种格式的文件
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }

        ]
    },
    plugins: {   // 文件的优化 资源故哪里和环境变量注入 作用于整个构建过程

    }
}