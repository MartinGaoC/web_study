let path = require('path');   //  自带路径模块
let HtmlWabpackPlugin = require('html-webpack-plugin');   // 处理index插件
let PostcssPxToViewport = require('postcss-px-to-viewport');

//  手动选择配置文件命令   npx webpack --config webpack.config.my.js
module.exports = {
    devServer:{ //开发的配置
        port:3001,
        progress:true,
        open:true,
        contentBase:'./dist'
    },
    mode:'development',   // 模式，默认两种 production 生产环境  development开发环境
    entry: './src/index.js', // 入口
    output:{
        filename:'bundle.js', // 打包后的文件名  可以加入[hash:8]戳
        path:path.resolve(__dirname,'dist')  //  会自动转为绝对路径
    },
    plugins:[   // 数组  放着所有webpack插件
        new HtmlWabpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        })
        // new PostcssPxToViewport({
        //     viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
        //     viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
        //     unitPrecision: 3,// 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
        //     viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
        //     selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        //     minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
        //     mediaQuery: false // 允许在媒体查询中转换`px`
        // })
        
    ],
    module:{ // 模块，处理css模块
        rules:[ // 规则  css-loader  负责解析@import这种语法的
            // style-loder 它是吧css插入到head的标签中
            //loader的特点  希望单一   用法，  字符串只用一个loader，多个loader需要【】
            // loader的顺序 默认是从右向左执行,从下到上执行
            // loader还可以写成对象方式
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use:[
                    
                    {
                        loader:'style-loader',
                        // options:{
                        //     insertAt:'top' //  文件位置
                        // }
                    },
                    {
                        loader:'css-loader',
                    }
                    
                    
                ]
            },
            // {
            //     test: /\.stylus$/,
            //     use:[
            //         {
            //             loader:'style-loader',
            //             // options:{
            //             //     insertAt:'top' //  文件位置
            //             // }
            //         },
            //         'css-loader',
            //         'postcss-loader',
            //         'stylus-loader'
            //     ]
            // }
            
            

        ]
    }
}