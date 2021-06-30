// export const decorators = [
//   (story, context) => ({
//     template: `
//       <div style="backgroundColor: gray; padding: 10px">
//         <story />
//       </div>
//     `,
//   }),
// ]

import { configure, addDecorator } from '@storybook/vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import colors from 'vuetify/es5/util/colors'
// import '@mdi/font/css/materialdesignicons.css'
// 上記を使わず、.storybook/preview-head.htmlに以下の
// 2行を追加した
// <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap"
//  rel="stylesheet"
//  />
// <link href="https://cdn.jsdelivr.net/npm/@mdi/font@3.x/css/materialdesignicons.min.css"
//  rel="stylesheet"
// />

const vuetifyOptions = {}

Vue.use(Vuetify, {
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
})

export const decorators = [
  () => {
    return {
      vuetify: new Vuetify(vuetifyOptions),
      template: '<v-app><story/></v-app>',
    }
  },
]
