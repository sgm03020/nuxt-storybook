<!-- VuetifyButton.vue -->
<template>
  <!-- サンプル -->
  <!-- https://codesandbox.io/s/github/nuxt-community/storybook/tree/master/examples/addon-controls?from-embed=&file=/components/MyButton.vue:0-740 -->
  <!-- <button class="test" :class="btnClass">
    <slot>{{ text }}</slot>
  </button> -->
  <div class="text-center">
    <v-btn :rounded="rounded" :color="color" :class="btnClass"
      ><slot>{{ text }}</slot></v-btn
    >
  </div>
</template>

<script>
/**
 * I'm VuetifyButton
 */
export default {
  props: {
    /**
     * 丸み
     */
    rounded: {
      type: Boolean,
      default: false,
    },
    /**
     * タイプ
     */
    color: {
      type: String,
      default: 'primary',
    },
    /**
     * 名前
     */
    text: {
      type: String,
      default: 'VButton',
    },
    /**
     * ボタンクラス
     */
    btnClass: {
      type: String,
      default: 'mx-auto',
    },
  },
  computed: {
    // btnClass() {
    //   const classes = []
    //   if (this.round) {
    //     classes.push('rounded-full')
    //   }
    //   if (this.type === 'primary') {
    //     classes.push('bg-blue-500 hover:bg-blue-700')
    //   } else if (this.type === 'secondary') {
    //     classes.push('bg-gray-500 hover:bg-gray-700')
    //   }
    //   return classes.join(' ')
    // },
  },
}
</script>

<style lang="scss" scoped>
.test {
  font-size: 2rem;
  color: red;
}
</style>
