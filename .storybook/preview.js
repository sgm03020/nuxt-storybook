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
