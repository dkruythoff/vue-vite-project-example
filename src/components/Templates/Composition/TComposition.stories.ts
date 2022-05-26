import { Story, Meta } from '@storybook/vue3'
import TComposition from './TComposition.vue'
import { TCompositionProps } from './TComposition.props'

export default {
  title: 'Templates/Composition',
  component: TComposition,
  argTypes: {}
} as Meta

const Template: Story<TCompositionProps> = (args) => ({
  components: { TComposition },
  setup() { return { args } },
  template: '<t-composition v-bind.prop="args" />'
})

export const Default = Template.bind({});
Default.args = {
  navigationSide: {
    direction: 'column',
    items: [
      {
        href: '#',
        text: 'Side item 1'
      },
      {
        href: '#',
        text: 'Side item 2'
      }
    ]
  },
  navigationTop: {
    items: [
      {
        href: '#',
        text: 'Top item 1'
      },
      {
        href: '#',
        text: 'Top item 2'
      }
    ]
  }
}