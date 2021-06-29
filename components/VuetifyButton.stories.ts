import VuetifyButton from './VuetifyButton.vue'
import markdown from '/markdown/product.md'

export default {
  title: 'VuetifyButton',
  component: VuetifyButton,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
      defaultValue: 'primary',
    },
    round: { control: 'boolean' },
    text: {
      control: 'text',
      defaultValue: 'Awesome Button',
    },
  },
  parameters: {
    notes: { markdown },
  },
}

export const Button = (arg: any, { argTypes }: any) => ({
  components: { VuetifyButton },
  props: Object.keys(argTypes),
  template: '<VuetifyButton v-bind="$props" />',
})
