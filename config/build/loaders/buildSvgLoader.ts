import { RuleSetRule } from 'webpack';

export function buildSvgLoader():RuleSetRule {
  return {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [{
      loader: '@svgr/webpack',
      options: {
        icon: true, // позволяет задавать высоту и ширину svg содержимому
        svgoConfig: [{
          name: 'convertColors',
          params: { currentColor: true }, // задавать цвет сразу и для fill и для stroke
        },
        ],
      },
    }],
  }
};