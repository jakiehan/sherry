import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export const buildLoaders = ({ isDev, paths }: BuildOptions): RuleSetRule[] => {

  const assetLoader = {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    }

  const fontLoader = {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    }

  const svgLoader: RuleSetRule = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [{
      loader: '@svgr/webpack',
      options: {
        icon: true, // позволяет задавать высоту и ширину svg содержимому
        svgoConfig: [{
          name: 'convertColors',
          params: { currentColor: true } // задавать цвет сразу и для fill и для stroke
          }
        ]
      }
    }],
  }

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

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env'],
        "plugins": [
          [
            "i18next-extract",
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            }
          ],

        ]
      }
    }
  }

  // Если не используем typescript - нужен babel-loader(новый стандарт js перегоняет в старый)
  const typeScriptLoader = {
    test: /\.tsx?$/,  // отлавливаем ts файлы
    use: 'ts-loader', // поле use - указываем лоадер, который необходим для этих файлов
    exclude: /node_modules/, // исключаем директорию
  }

  return [
    assetLoader,
    fontLoader,
    babelLoader,
    typeScriptLoader,
    cssLoader,
    svgLoader,
  ]
}
