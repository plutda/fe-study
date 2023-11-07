const path = require('path')

module.exports = {
    // mode: "production",
    mode: "development",
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: path.resolve(__dirname, './my-loader/index.js')
                }
            }
        ]
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist")
    }
}