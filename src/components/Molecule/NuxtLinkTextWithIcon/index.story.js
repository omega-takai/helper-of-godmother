import { storiesOf } from '@storybook/vue'
import { withKnobs, radios } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import NuxtLinkTextWithIcon from './index.vue'
import { FlexLayout, FlexItem } from '@/assets/styledComponent/component'

const colors = ['green', 'grey']
const icons = ['TwitterIcon', 'FacebookIcon', 'GithubIcon', 'InstagramIcon']

const stories = storiesOf('Design System|Molecule/NuxtLinkTextWithIcon', module)

stories.addDecorator(withKnobs)

stories.add('normal', () => ({
  components: {
    NuxtLinkTextWithIcon,
    FlexLayout,
    FlexItem,
  },
  data() {
    return {
      colors,
    }
  },
  props: {
    iconName: {
      type: String,
      default: radios('iconName', icons, icons[0]),
    },
  },
  template: `
    <FlexLayout>
      <FlexItem
        v-for="(color, i) in colors"
        :key="i"
      >
        <NuxtLinkTextWithIcon
          url="https://ja.nuxtjs.org/"
          :iconName="iconName"
          :text="upperCamelCase(color)"
          :colorType="color"
          @click.native.prevent="action"
        />
      </FlexItem>
    </FlexLayout>`,
  methods: {
    action: action('clicked'),
    upperCamelCase(colorType) {
      const lowercase = colorType.toLowerCase()
      return lowercase.charAt(0).toUpperCase() + lowercase.slice(1)
    },
  },
}))
