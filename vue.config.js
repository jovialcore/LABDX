const Dotenv = require('dotenv-webpack');
module.exports = {
    publicPath: "",
    configureWebpack: {
        plugins: [
            new Dotenv()
        ]
    }
    //publicPath: process.env.NODE_ENV === 'production' ?
    //'/production-sub-path/': '/'
}

// module.exports = {
//     outputDir: '../static',
//     indexPath: '../index.html'
// }