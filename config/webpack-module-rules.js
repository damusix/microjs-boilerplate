'use strict';

const autoprefixer = require('autoprefixer');

module.exports = [
  {
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: { importLoaders: 1 }
      },
      {
        loader: 'postcss-loader',
        options: {
          config: { path: 'config/postcss.config.js' }
        }
      }
    ]
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: ['file-loader']
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: ['file-loader']
  },
  {
    test: /\.tag$/,
    exclude: /node_modules/,
    use: [{
      loader: 'riot-tag-loader',
      options: {
        hot: false
      }
    }]
  }
]
