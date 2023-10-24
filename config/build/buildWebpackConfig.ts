import { BuildOptions } from './types/config';
import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolves } from './buildResolves';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {

  const {paths, mode, isDev} = options

  return {
    // development | production
    mode,
    // файл входа(первоначальный файл)
    entry: paths.entry,
    // куда будет собираться проект
    output: {
      filename: '[name].[contenthash].js', // уникальное(динамическое) имя файла, хешированое
      path: paths.build,
      clean: true, // очищать лишние(старые) файлы
    },
    plugins: buildPlugins(options),
    module: {
      // обработка файлов помимо js файлов(png, ts, scss...)
      rules: buildLoaders(options),
    },
    resolve: buildResolves(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}