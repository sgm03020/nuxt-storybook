const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')

module.exports = nuxifyStorybook({
  webpackFinal (config, options) {

    // extend config here
    //
    // https://zenn.dev/sa2knight/books/aca5d5e021dd10262bb9/viewer/e61f4f
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ['style-loader', 'css-loader', 'sass-loader'],
    //   include: path.resolve(__dirname, '../')
    // })
    return config
  },
  stories: [
    // Add your stories here
    '../components/**/*.stories.js',
    '../components/**/*.stories.ts'
  ],
  addons: [
    // Add your addons here
    '@storybook/addon-notes'
  ]
})
