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
    const paths: BuildPath = {
      src: path.resolve(__dirname, '..', '..', 'src'),
      build: '',
      entry: '',
      html: '',
    };

    config.resolve.modules = [paths.src, 'node_modules'];
    config.resolve.extensions.push('ts', 'tsx');
    // отключаем svg loader сторибука, подключаем свой svgr
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
      if (rule.test instanceof RegExp && rule.test.toString().includes('svg')) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });

    config.module.rules.push(buildSvgLoader());
    config.module.rules.push(buildCssLoader(true));

    config.plugins.push(new DefinePlugin({ __IS_DEV__: true }));

    return config;
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
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
