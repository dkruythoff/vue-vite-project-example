import { Story, Meta } from '@storybook/vue3'
import ALink from './ALink.vue'
import { ALinkProps } from './ALink.props'

export default {
  title: 'Atoms/Link',
  component: ALink,
  argTypes: {}
} as Meta

const Template: Story<ALinkProps> = (args) => ({
  components: { ALink },
  setup() { return { args } },
  template: '<a-link v-bind.prop="args" />'
})

export const Default = Template.bind({});
Default.args = {
  text: 'Link text',
  href: '#'
}

export const NoHref = Template.bind({});
NoHref.args = {
  ...Default.args,
  href: undefined
}