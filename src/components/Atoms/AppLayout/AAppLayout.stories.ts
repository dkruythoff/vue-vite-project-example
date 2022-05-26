import { Story, Meta } from '@storybook/vue3'
import AAppLayout from './AAppLayout.vue'

const lipsum = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lobortis nisl. Quisque eget magna quis felis aliquam hendrerit. Maecenas quis enim sodales, mollis diam id, euismod lacus. Nunc interdum arcu quis odio condimentum, non dignissim odio lobortis. Morbi imperdiet massa nec nunc convallis tempus. Mauris mattis, tortor eget sagittis auctor, dui massa porta orci, id semper eros mi ut eros. Mauris vitae efficitur massa. Duis tincidunt velit mauris, nec consequat augue sollicitudin sit amet. Phasellus sodales tellus eros, vel efficitur tellus venenatis tincidunt. Duis a volutpat mauris.',
  'Aenean pulvinar ut lacus semper interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum non orci pretium rutrum. Praesent sed luctus justo. Morbi arcu orci, molestie quis odio in, dignissim bibendum metus. In vel neque ut mi varius iaculis. Aenean blandit, nisi pellentesque ultrices efficitur, purus ligula malesuada ipsum, vel iaculis nulla augue in nisl. Fusce efficitur velit sem, id congue libero vulputate id. Sed tincidunt magna at maximus ullamcorper.',
  'Sed faucibus, sapien et feugiat laoreet, arcu neque venenatis velit, id pharetra quam tellus a nisi. Etiam id eleifend felis. Nullam vel arcu massa. In eget nulla sit amet ex congue aliquet. Phasellus sit amet leo vitae arcu bibendum auctor a eget elit. Morbi rhoncus tempor augue, ut dapibus risus imperdiet nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vel dui sodales, ultricies dolor maximus, posuere quam. Ut vitae elit nisl. Proin quis odio accumsan, venenatis massa pretium, fringilla neque. Integer ullamcorper lectus orci, sit amet luctus magna rhoncus quis. Nam sit amet volutpat lacus.',
  'Aliquam feugiat sapien eros, non semper purus egestas non. Maecenas arcu tortor, mattis vehicula nisl non, tempus pharetra metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non purus at metus scelerisque mollis. Duis venenatis non metus eu dapibus. Nam non lectus iaculis, hendrerit magna eget, vulputate nulla. Praesent cursus, velit in bibendum commodo, ex magna semper nisl, id iaculis purus nisl sed nibh. Nullam mattis viverra elit, id gravida nibh dignissim et. Praesent hendrerit mauris in purus aliquet ultricies. Suspendisse congue felis nec orci semper, eu convallis libero consectetur. Pellentesque laoreet lacus vitae ex cursus, at laoreet nibh porttitor. Morbi ac felis et diam auctor tempus. Maecenas nunc velit, mollis ac nisi non, rutrum rhoncus ex.',
  'Integer venenatis nisl non pretium rhoncus. Ut et sem aliquet magna maximus mattis. Maecenas iaculis pellentesque elit sed posuere. Donec ac neque rutrum massa sodales euismod vitae ac ligula. Sed a semper sem. Duis vestibulum augue tellus, sit amet varius ex rhoncus sed. Phasellus tempor, sapien vel efficitur accumsan, risus nulla suscipit dolor, quis tincidunt mi lectus et sapien. Integer tempor ipsum non mi efficitur, ut porttitor dolor lacinia. Nullam vel risus ut lorem tincidunt tempus vel nec nunc. Aenean malesuada tortor eget justo finibus, accumsan aliquet sapien gravida. Aenean tempus convallis ligula, vitae egestas purus pharetra non. Vestibulum vitae consectetur est. Nulla viverra nibh at nisl bibendum sagittis. Sed interdum imperdiet neque et vulputate. Duis placerat massa a maximus scelerisque. Ut vitae tellus quis sem consectetur posuere a et lectus.'
]

export default {
  title: 'Atoms/AppLayout',
  component: AAppLayout,
  argTypes: {}
} as Meta

const Template: Story = (args) => ({
  components: { AAppLayout },
  setup() { return { args } },
  template: `
  <div id="app">
    <a-app-layout>
      <template #header>
        header
      </template>
      <template #nav>
        <p>${lipsum.join('</p><p>')}</p>
      </template>
      <template #main>
        <p>${lipsum.join('</p><p>')}</p>
      </template>
    </a-app-layout>
  </div>
  `
})

export const Default = Template.bind({});
Default.args = {}