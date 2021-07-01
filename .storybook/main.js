const path = require('path')

module.exports = {
  stories: [
    '../components/**/*.stories.[tj]s',
    '../stories/**/*.stories.[tj]s',
  ],
  addons: [
    '@storybook/addon-notes',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    // 下のconfig.module.rules.pushがあるとエラーとなる
    // '@storybook/preset-scss',
    {
      // OK1
      name: '@storybook/preset-scss',
      options: {
        importLoaders: 1, // -> 状況変わらず
        modules: {
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      // 以下ではダメ
      // options: {
      //   cssLoaderOptions: {
      //     modules: true,
      //     localIdentName: '[name]__[local]--[hash:base64:5]',
      //   },
      // },
    },
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      // use: [
      //   'style-loader',
      //   {
      //     loader: 'css-loader',
      //     // options: {
      //     //   modules: {
      //     //     localIdentName: '[name]__[local]--[hash:base64:5]',
      //     //   },
      //     //   importLoaders: 1,
      //     // },
      //     // 旧タイプ
      //     // https://uiuifree.com/blog/design/storybook-vue-css-module/
      //     options: {
      //       importLoaders: 1,
      //       modules: true,
      //       localIdentName: '[name]__[local]___[hash:base64:5]',
      //     },
      //   },
      //   // {
      //   //   loader: 'sass-loader',
      //   //   options: {
      //   //     sassOptions: {
      //   //       indentedSyntax: true,
      //   //     },
      //   //   },
      //   // },
      //   'sass-loader',
      // ],
      // oneOf: [
      //   {
      //     resourceQuery: /module/,
      //     use: [
      //       'vue-style-loader',
      //       {
      //         loader: 'css-loader', //not absolute path, so uses root css-loader in package.json
      //         options: { modules: { localIdentName: '[name]-[hash]' } }
      //       },
      //       'sass-loader'
      //     ]
      //   },
      //   { use: [ 'vue-style-loader', 'css-loader', 'sass-loader' ] }
      // ],
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    })
    return config
  },
}
