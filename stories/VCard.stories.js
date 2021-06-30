// typescriptだとまだ型が分からないので、jsファイルに変更
// argsとargTypesを合わせるのがミソ
// これでstorybook上から値を変更できて、
// デフォルトの異なるCard1, Card2などを作れそう
import VCard from '../components/VCard.vue'
export default {
  title: 'VCard',
  component: VCard,
  args: {
    cardClassStr: '',
    textClassStr: '',
    iconClassStr: '',
    text: '',
    icon: '',
    name: '',
  },
  argTypes: {
    cardClassStr: {
      control: 'text',
      defaultValue: '',
    },
    textClassStr: {
      control: 'text',
      defaultValue: '',
    },
    iconClassStr: {
      control: 'text',
      defaultValue: '',
    },
    text: {
      control: 'text',
      defaultValue: '',
    },
    icon: {
      control: 'text',
      defaultValue: '',
    },
    name: {
      control: 'text',
      defaultValue: '',
    },
  },
  // argTypes: {
  //   cardClassStr: {
  //     control: 'text',
  //     defaultValue: 'mx-auto pa-2 grey lighten-3',
  //   },
  //   iconClassStr: {
  //     control: 'text',
  //     defaultValue: 'warning--text',
  //   },
  //   textClassStr: {
  //     control: 'text',
  //     defaultValue: 'warning--text font-weight-bold',
  //   },
  //   text: {
  //     control: 'text',
  //     defaultValue: 'Awesome Button',
  //   },
  //   icon: {
  //     control: 'text',
  //     defaultValue: 'mdi-cart',
  //   },
  // },
}

// const Template = (args: any, { argTypes }: any) => ({
//   components: { MyCard },
//   props: Object.keys(argTypes),
//   template: '<MyCard v-bind="$props" />',
// })

// 1)
// const Template = (args: any, { argTypes }: any) => ({
//   components: { MyCard },
//   props: Object.keys(argTypes),
//   template: '<MyCard v-bind="$props" />',
// })
// 2)
// const Template = (args: any, { argTypes }: any) => {
//   console.log(argTypes)
//   return {
//   components: { MyCard },
//   props: Object.keys(argTypes),
//   template: '<MyCard v-bind="$props" />',
//   }
// }
// 3) 成功(Card1、Card2など異なる状態を見せる)
const Template = (args, { argTypes }) => ({
  components: { VCard },
  props: Object.keys(argTypes),
  template: '<VCard v-bind="$props" />',
})

export const Card1 = Template.bind({})
// @ts-ignore
Card1.args = {
  cardClassStr: 'mx-auto pa-2 grey lighten-3',
  textClassStr: 'warning--text font-weight-bold',
  iconClassStr: 'warning--text',
  text: 'Button11',
  icon: 'mdi-cart',
  name: 'name1',
}

export const Card2 = Template.bind({})
// @ts-ignore
Card2.args = {
  cardClassStr: 'mx-auto pa-2 grey lighten-3',
  textClassStr: 'primary--text font-weight-bold',
  iconClassStr: 'primary--text',
  text: 'Button22',
  icon: 'mdi-cart',
  name: 'name1',
}
