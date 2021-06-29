// export * from '~~/.nuxt-storybook/storybook/preview.js'

// 試しに buefyを使ってみる
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Vue from 'vue'

Vue.use(Buefy)

// https://storybook.js.org/docs/vue/writing-stories/decorators
// デフォルトがexport * from '~~/.nuxt-storybook/storybook/preview.js'
// となっているが、コメントして以下とする
export const decorators = [(story) => ({
  components: { story },
  template: '<v-app><div style="margin: 2em;"><story /></div></v-app>'
})];

