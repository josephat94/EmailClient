const webpack = require('webpack')
const path = require('path')


module.exports={

entry: './src/index.js',
module: {
rules: [

    {
        test: /\.js$/,
        exclude:/node_modules/,
        loader: 'babel-loader',
        options: {
            presets: ['env']
        }
    },
    {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
    }
]

},
resolve:{
extensions: ['*', '.js']

},
output: {

    publicPath: path.resolve(__dirname, 'build/'),
    filename: 'build.js'
},
devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    publicPath: 'http://localhost:3000/build'
}, 
plugins: [new webpack.HotModuleReplacementPlugin()]


}