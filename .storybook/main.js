const path = require('path')

module.exports = {
  stories: ['../components/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-notes',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    })
    return config
  },
}
