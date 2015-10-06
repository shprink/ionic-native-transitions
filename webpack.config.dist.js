var path = require('path'),
    libPath = path.join(__dirname, 'lib'),
    distPath = path.join(__dirname, 'dist'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(libPath, 'index.js'),
    output: {
        path: distPath,
        filename: 'ionic-native-transitions.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: "ng-annotate?add=true!babel"
        }]
    },
    plugins: []
};
