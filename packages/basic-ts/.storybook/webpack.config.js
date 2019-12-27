const path = require('path');

const rule = {
  test: /\.(ts|tsx)$/,
  use: [
    {
      loader: require.resolve('ts-loader'),
    },
    {
      loader: require.resolve('react-docgen-typescript-loader'),
    },
    {
      loader: require.resolve('@storybook/source-loader'),
      options: {
        parser: 'typescript',
        injectParameters: true,
        prettierConfig: {
          trailingComma: 'all',
        },
      },
    },
  ],
};

module.exports = ({ config }) => {
  config.module.rules.push(rule);
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
