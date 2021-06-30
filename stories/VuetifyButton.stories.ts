import VuetifyButton from '../components/VuetifyButton.vue'
import markdown from '../markdown/productBuyButton.md'

export default {
  title: 'VuetifyButton',
  component: VuetifyButton,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['none', 'primary', 'secondary', 'warning', 'danger', 'info'],
      },
      defaultValue: 'primary',
    },
    rounded: { control: 'boolean' },
    text: {
      control: 'text',
      defaultValue: 'Awesome Button',
    },
    btnClass: {
      control: 'text',
      defaultValue: '',
    }
  },
  parameters: {
    notes: { markdown },
  },
}

export const VButton = (arg: any, { argTypes }: any) => ({
  components: { VuetifyButton },
  props: Object.keys(argTypes),
  template: '<VuetifyButton v-bind="$props" />',
})

