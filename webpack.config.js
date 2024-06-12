const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  // Check for assets
  const assetsPath = path.resolve(__dirname, 'src', 'assets');
  const thereAreAssets = fs.existsSync(assetsPath) &&
    fs.readdirSync(assetsPath).length > 0;

  const plugins = [
    new HtmlWebpackPlugin({
      // Path to my template file
      template: 'src/index.html',
    }),
  ];

  if (thereAreAssets)
    plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          // Copy from src/assets to dist/assets
          { from: 'src/assets', to: 'assets' },
        ],
      }),
    );

  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: plugins,
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
      open: true,
    },
  };
};
