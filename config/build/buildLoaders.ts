import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: ((resourcePath: string) => Boolean(resourcePath.includes('.module.'))),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          },
        },
      },
      "sass-loader",
    ],
  }

  // Если не используем typescript - нужен babel-loader(новый стандарт js перегоняет в старый)
  const typeScriptLoader = {
    test: /\.tsx?$/,  // отлавливаем ts файлы
    use: 'ts-loader', // поле use - указываем лоадер, который необходим для этих файлов
    exclude: /node_modules/, // исключаем директорию
  }

  return [
    typeScriptLoader,
    cssLoader,
  ]
}
