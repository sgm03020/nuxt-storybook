<template>
  <v-card :class="cardClassStr">
    <v-icon :class="iconClassStr">
      <slot>{{ icon }}</slot>
    </v-icon>
    <span :class="textClassStr"
      ><slot>{{ text }}</slot></span
    >
  </v-card>
</template>

<script>
export default {
  // props: {
  //   cardClassStr: {
  //     type: String,
  //     default: 'mx-auto pa-2 grey lighten-3',
  //   },
  //   iconClassStr: {
  //     type: String,
  //     default: 'warning--text',
  //   },
  //   textClassStr: {
  //     type: String,
  //     default: 'warning--text font-weight-bold',
  //   },
  //   icon: {
  //     type: String,
  //     default: 'mdi-cart',
  //   },
  //   text: {
  //     type: String,
  //     default: 'Button',
  //   },
  //   name: {
  //     type: String,
  //     default: 'Card1',
  //   },
  // },
  props: {
    cardClassStr: {
      type: String,
      default: '',
    },
    textClassStr: {
      type: String,
      default: '',
    },
    iconClassStr: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
  computed: {
    // cardClass() {
    //   const classes = []
    //   if (this.classStr) {
    //     classes.push(this.classStr)
    //   }
    // },
  },
}
</script>
