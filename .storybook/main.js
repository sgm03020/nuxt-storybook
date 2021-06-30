const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')
const path = require('path')

module.exports = nuxifyStorybook({
  webpackFinal(config, options) {
    // extend config here
    //
    // https://zenn.dev/sa2knight/books/aca5d5e021dd10262bb9/viewer/e61f4f
    config.module.rules.push({
      // test: /\.scss$/,
      test: /\.s?css$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[local]_[hash:base64:5]',
            },
          },
        },
        {
          loader: 'sass-loader',
        },
      ],
      include: path.resolve(__dirname, '../'),
    })
    config.module.rules.push({
      test: /\.vue$/,
      loader: 'storybook-addon-vue-info/loader',
      enforce: 'post',
    })
    return config
  },
  stories: [
    // Add your stories here
    '../components/**/*.stories.js',
    '../components/**/*.stories.ts',
  ],
  addons: [
    // Add your addons here
    '@storybook/addon-notes',
    // '@storybook/preset-scss' // <style lang="scss">でエラーとなる
  ],
})
