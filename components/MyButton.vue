<!-- MyButton.vue -->
<template>
  <!-- サンプル -->
  <!-- https://codesandbox.io/s/github/nuxt-community/storybook/tree/master/examples/addon-controls?from-embed=&file=/components/MyButton.vue:0-740 -->
  <button class="test" :class="btnClass">
    <slot>{{ text }}</slot>
  </button>
  <!-- <div :class="$style.title">SmallComponent!</div> -->
  <!-- <div>SmallComponent!</div> -->
</template>

<script>
/**
 * I'm MyButton
 */
export default {
  props: {
    /**
     * 丸み
     */
    round: {
      type: Boolean,
      default: false,
    },
    /**
     * タイプ
     */
    type: {
      type: String,
      default: 'primary',
    },
    /**
     * 名前
     */
    text: {
      type: String,
      default: 'Button',
    },
  },
  computed: {
    btnClass() {
      const classes = []
      if (this.round) {
        classes.push('rounded-full')
      }
      if (this.type === 'primary') {
        classes.push('bg-blue-500 hover:bg-blue-700')
      } else if (this.type === 'secondary') {
        classes.push('bg-gray-500 hover:bg-gray-700')
      }
      return classes.join(' ')
    },
  },
}
</script>

<!-- style moduleはstorybookでどうしても反映されない -->
<!--
<style module>
.title {
  border: dashed 2px #5b8bd0;
  border-radius: 5px;
  padding: 3px;
  color: blue;
}
</style>
-->
<style lang="scss" scoped>
.test {
  font-size: 2rem;
  color: red
}
</style>
