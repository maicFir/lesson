let defaults = require('./defaults');
let ExtractTextPlugin = require('extract-text-webpack-plugin');


let moduleConfig = {
    rules: [
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.sass/,
            loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
        },
        {
            test: /\.scss/,
            loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
        },
        {
            test: /\.less/,
            loader: 'style-loader!css-loader!less-loader'
        },
        {
            test: /\.(png|jpg|gif|woff|woff2)$/,
            loader: 'url-loader?limit=5000&name=images/[name]-[hash:6].[ext]'
        },
        {
            test: /\.(mp4|ogg|svg)$/,
            loader: 'file-loader?name=lib/[name]-[hash:6].[ext]?'
        },
        {
            test: /\.(js|jsx)$/,
            loader: 'react-hot-loader!babel-loader',
            exclude: /node_modules/
        }
    ]
}

if (defaults.env !== 'production') {
    moduleConfig.rules.push({
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader?modules&localIdentName=[local]-[hash:base64:5]!stylus-loader'
    })
} else {
    moduleConfig.rules.push({
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader', 
            use: 'css-loader?modules&localIdentName=[local]-[hash:base64:5]!stylus-loader'
        })
    })
}

module.exports = moduleConfig