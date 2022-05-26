import { Story, Meta } from '@storybook/vue3'
import ALogo from './ALogo.vue'
import { ALogoProps } from './ALogo.props'

export default {
  title: 'Atoms/Logo',
  component: ALogo,
  argTypes: {}
} as Meta

const Template: Story<ALogoProps> = (args) => ({
  components: { ALogo },
  setup() { return { args } },
  template: '<a-logo v-bind.prop="args" />'
})

export const Default = Template.bind({});
Default.args = {}