const path = require('path');

module.exports = {
  entry: `./src/main.js`,
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test:/\.(pdf|gif|png|jpe?g|svg)$/,
        loader: 'file?name=[path][name].[ext]'
      }
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  devServer: {
    contentBase: `${__dirname}/www`
}
};
