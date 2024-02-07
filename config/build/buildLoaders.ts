import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader }  from './loaders/buildSvgLoader'

export const buildLoaders = ({ isDev, paths }: BuildOptions): RuleSetRule[] => {
  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const fontLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  };

  const svgLoader = buildSvgLoader();

  const cssLoader = buildCssLoader(true);

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],

        ],
      },
    },
  };

  // Если не используем typescript - нужен babel-loader(новый стандарт js перегоняет в старый)
  const typeScriptLoader = {
    test: /\.tsx?$/, // отлавливаем ts файлы
    use: 'ts-loader', // поле use - указываем лоадер, который необходим для этих файлов
    exclude: /node_modules/, // исключаем директорию
  };

  return [
    assetLoader,
    fontLoader,
    babelLoader,
    typeScriptLoader,
    cssLoader,
    svgLoader,
  ];
};
