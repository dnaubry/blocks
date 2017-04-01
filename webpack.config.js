module.exports = {
    entry: {
        App: "./scripts/App.js"
    },
    output: {
        path: "./temp/scripts",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}
