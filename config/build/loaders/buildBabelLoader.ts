import { BuildOptions } from '../types/config';
import babelRemovePropsPlugin from '../babel/babelRemovePropsPlugin';

interface BuildBabelLoaderOptions extends BuildOptions {
  isTSX?: boolean
}

export function buildBabelLoader({ isDev, isTSX }: BuildBabelLoaderOptions) {
  return {
    test: isTSX ? /\.(|jsx|tsx)$/ : /\.(|js|ts)$/,
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
          [
            "@babel/plugin-transform-typescript",
            { isTSX }
          ],
          "@babel/plugin-transform-runtime",
          isTSX && [
            babelRemovePropsPlugin(),
            {
              props: ['data-testid']
            }
          ],
          isDev && require.resolve('react-refresh/babel')
        ].filter(Boolean),
      },
    },
  };
}