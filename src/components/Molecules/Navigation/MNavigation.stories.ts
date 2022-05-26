import { Story, Meta } from '@storybook/vue3'
import MNavigation from './MNavigation.vue'
import { MNavigationProps } from './MNavigation.props'

export default {
  title: 'Molecules/Navigation',
  component: MNavigation,
  argTypes: {}
} as Meta

const Template: Story<MNavigationProps> = (args) => ({
  components: { MNavigation },
  setup() { return { args } },
  template: '<m-navigation v-bind.prop="args" />'
})

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      text: 'item 1'
    },
    {
      href: '#',
      text: 'item 2'
    }
  ]
}

export const Column = Template.bind({});
Column.args = {
  ...Default.args,
  direction: 'column'
}