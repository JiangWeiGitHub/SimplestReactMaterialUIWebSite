import path from 'path'
import webpack from 'webpack'

module.exports = {
  devtool: 'eval',
  entry: {
    public: './public/src/index'
  },
  output: {
    path: path.join(__dirname, '/public/dist'),
    filename: 'bundle.js',
    publicPath: '/public/dist'
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [path.join(__dirname, 'public/src')],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    moduleDirectories: [ 'node_modules'],
    extensions: ['', '.js', '.jsx']
  }
}
