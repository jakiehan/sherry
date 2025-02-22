module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'simple-import-sort',
    'i18next',
    'react-hooks',
    'sherry-plugin',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react-hooks/exhaustive-deps': 1,
    'i18next/no-literal-string': [
      'error',
      { markupOnly: true, ignoreAttribute: ['to', 'target'] },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'sherry-plugin/sherry-path-checker-fsd': ['error', { alias: '@' }],
    'sherry-plugin/sherry-public-api-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: [
          '**/*.test.*',
          '**/*.stories.*',
          '**/StoreDecorator.tsx',
        ],
      },
    ],
    'sherry-plugin/sherry-layers-imports-fsd': [
      'error',
      {
        alias: '@',
        ignoreImportPatterns: [
          '**/StoreProvider',
          '**/StoreDecorator',
          '**/router',
          '**/testing',
          '**/stateSchema',
          '**/i18nForTests',
          '**/EditableProfileCard',
          '**/Article',
        ],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['./src/**/*.ts', './src/**/*.tsx'],
      rules: {
        'i18next/no-literal-string': 0,
      },
    },
  ],
};
