const Fiber = require('fibers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const urlLoader = require('url-loader')
const path = require('path');
console.log(__dirname)
module.exports = {
  // Our "entry" point
  entry: './src/app/index.js',
  output: {
    // The global variable name any `exports` from `index.js` will be available at
    library: 'SITE',
    // Where webpack will compile the assets
    path: path.resolve(__dirname, 'src/dist'),
  },
  module: {
    rules: [
      // {
      //   test: /\.svg$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 8192,
      //     name: '[name].[ext]',
      //     publicPath: 'images/'
      //   },
       
        {
          test: /\.(gif|png|jpe?g|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/'
              }
            }
          ]
        },
     
      // {,{}
     
      {
        
        // Setting up compiling our Sass
        test: /\.sass$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: Fiber,
                outputStyle: 'expanded',
              },
            },
          },
          
        ],
      },
    ],
  },
  // Any `import`s from `node_modules` will compiled in to a `vendor.js` file.
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new CopyWebpackPlugin({patterns:[
      {from:'./src/images',to:'images'} 
  ]}),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.ejs',
    
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
     contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}