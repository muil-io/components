const path = require('path');

const paths = {
  src: { charts: path.resolve(__dirname, 'src/charts'), layout: path.resolve(__dirname, 'src/layout') },
  dist: path.resolve(__dirname, 'lib'),
};

module.exports = {
  entry: paths.src,
  mode: 'production',
  devtool: 'none',
  output: {
    filename: '[name].js',
    path: paths.dist,
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'styled-components': 'styled-components',
  },
};
