const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/server/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    externalsPresets: { node: true },
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                // express が要求している body-paser の依存関係にある iconv-lite でエラーが起きてしまう。
                // iconv-lite のバージョンが上がれば解決するはずだが、express が body-paser の version をあげるのまち
                test: /node_modules[\/\\](iconv-lite)[\/\\].+/,
                resolve: {
                  aliasFields: ['main']
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    plugins: [new NodemonPlugin()]
};
