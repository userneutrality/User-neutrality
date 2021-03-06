const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

const path = require('path');
module.exports = (env = {}) => {
    const ui = env.ui || 'material-ui';

    return { 
        entry: './client/index.js',
        output: {
            path: path.resolve('dist'),
            filename: 'index_bundle.js'
        },
        module: {
            loaders: [
                { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
                { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
                { test: /\.css$/, loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]--[hash:base64:5]' }
            ]
        },
        plugins: [HtmlWebpackPluginConfig],

        resolve: {
            alias: {
                Components: path.resolve(__dirname, `client/${ui}/components/`),
                Css: path.resolve(__dirname, `client/${ui}/css/`),
            }
        }
    };
}
