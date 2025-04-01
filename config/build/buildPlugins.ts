import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export const buildPlugins = ({ paths, isDev, apiURL, project }: BuildOptions): webpack.WebpackPluginInstance[] => {

  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: './public/favicon.ico'
    }),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiURL),
      __PROJECT__: JSON.stringify(project),
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }),
  ]

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
    plugins.push(new CircularDependencyPlugin({ exclude: /node_modules/, failOnError: true }));
  }

  if (!isDev) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8]',
      chunkFilename: 'css/[name].[contenthash:8]',
    }));
    /*plugins.push(new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      deleteOriginalAssets: true,
      compressionOptions: {
        level: 9,
      },
    }));
    plugins.push(new CompressionPlugin({
      filename: "[path][base].br",
      algorithm: "brotliCompress",
      deleteOriginalAssets: true,
      compressionOptions: {
        level: 11,
      },
    }));*/
  }

  return plugins
};
