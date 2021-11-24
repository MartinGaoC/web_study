const path = require('path');

module.exports = {
    entry: './src/index.html',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'mydemo.html'
    }
}