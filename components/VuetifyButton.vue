<template>
  <!-- サンプル -->
  <!-- https://codesandbox.io/s/github/nuxt-community/storybook/tree/master/examples/addon-controls?from-embed=&file=/components/MyButton.vue:0-740 -->
  <!-- <button class="font-bold py-2 px-4 text-white" :class="btnClass">
    <slot>{{ text }}</slot>
  </button> -->
  <!-- <v-app>
    <div class="text-center">
      <v-btn :rounded="round" :color="type"><slot>{{ text }}</slot></v-btn>
    </div>
  </v-app> -->
  <div>
    <v-btn :rounded="round" :color="type"
      ><slot>{{ text }}</slot></v-btn
    >
    <b-field label="Message">
      <b-input maxlength="200" type="textarea"></b-input>
    </b-field>
  </div>
</template>

<script>
export default {
  props: {
    round: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'primary',
    },
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

<style lang="scss" scoped>
.block {
  background-color: #fff;
  &__colored { /* .block__colored に変換されます */
    color: red;
  }
}
</style>
