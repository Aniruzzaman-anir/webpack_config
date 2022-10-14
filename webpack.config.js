module.exports = {
    entry:'./src/index.js',
    output:{
        path:__dirname + '/dist',
        filename: 'bundle.js'
    },
    mode: 'development',
    module:{
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use:'babel-loader',
                resourceQuery: ["@babel/preset-es2015"]
                
            }
        ]
    }
}