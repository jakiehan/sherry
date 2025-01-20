import path from 'path';
import { RuleSetRule, DefinePlugin } from 'webpack';
import type { StorybookConfig } from '@storybook/react-webpack5';
import { BuildPath } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  // расширяем webpack конфигурацию сторибука
  webpackFinal: async (config) => {
    const { resolve, module, plugins } = config;

    const paths: BuildPath = {
      src: path.resolve(__dirname, '..', '..', 'src'),
      build: '',
      entry: '',
      html: '',
    };

    if (resolve) {
      resolve.modules = [paths.src, 'node_modules'];
      resolve.extensions?.push('ts', 'tsx');
    }

    if (module) {
      // отключаем svg loader сторибука, подключаем свой svgr
      // @ts-ignore
      module.rules = module.rules?.map((rule: RuleSetRule) => {
        if (
          rule.test instanceof RegExp &&
          rule.test.toString().includes('svg')
        ) {
          return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
      });

      module.rules?.push(buildSvgLoader());
      module.rules?.push(buildCssLoader(true));
    }

    if (plugins) {
      plugins.push(
        new DefinePlugin({
          __IS_DEV__: JSON.stringify(true),
          __API__: JSON.stringify('https://localhost:8000'),
          __PROJECT__: JSON.stringify('storybook'),
        })
      );
    }

    config.resolve!.alias = { '@': paths.src };

    return config;
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    'storybook-addon-mock',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  features: {
    storyStoreV7: false,
  },
  // чтобы работали переводы в storybook
  // staticDirs: ['../../public'],
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  docs: {
    autodocs: 'tag',
  },
};

export default config;
