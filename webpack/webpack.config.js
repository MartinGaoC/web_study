

module.export  = {
  enter: './src/index.js',
  output:{
    filename: 'main.js',
    path: 'dist'
  },
  module:{
    rule:[
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
}