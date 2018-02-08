module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: './bundle.js'
  },

  devServer: {
    port: 9000,
    contentBase: './public'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_module/,
        loader: "babel-loader",
        options: {
          presets: ['es2015', 'react']
        }
      }      
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  }
}