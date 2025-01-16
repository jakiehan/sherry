import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader }  from './loaders/buildSvgLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options;

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const fontLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  };

  const svgLoader = buildSvgLoader();

  const cssLoader = buildCssLoader(isDev);

  const codeBabelLoader = buildBabelLoader({ ...options, isTSX: false });
  const tsxBabelLoader = buildBabelLoader({ ...options, isTSX: true });

  // Если не используем typescript - нужен babel-loader(новый стандарт js перегоняет в старый)
/*  const typeScriptLoader = {
    test: /\.tsx?$/, // отлавливаем ts файлы
    use: 'ts-loader', // поле use - указываем лоадер, который необходим для этих файлов
    exclude: /node_modules/, // исключаем директорию
  };*/

  return [
    assetLoader,
    fontLoader,
    //typeScriptLoader,
    codeBabelLoader,
    tsxBabelLoader,
    cssLoader,
    svgLoader,
  ];
};
