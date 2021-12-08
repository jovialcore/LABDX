module.exports = {
    publicPath: "./",
    publicPath: process.env.NODE_ENV === 'production' ?
        '/production-sub-path/' :
        '/'
};

// module.exports = {
//     outputDir: '../static',
//     indexPath: '../index.html'
// }