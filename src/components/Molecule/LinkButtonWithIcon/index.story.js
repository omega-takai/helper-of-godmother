import { storiesOf } from '@storybook/vue'
import { withKnobs, radios } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import LinkButtonWithIcon from './index.vue'
import { FlexLayout, FlexItem } from '@/assets/styledComponent/component'

const colors = ['green', 'grey']
const icons = ['TwitterIcon', 'FacebookIcon', 'GithubIcon', 'InstagramIcon']
const iconPosition = ['left', 'right']

const stories = storiesOf('Design System|Molecule/LinkButtonWithIcon', module)

stories.addDecorator(withKnobs)

stories.add('normal', () => ({
  components: {
    LinkButtonWithIcon,
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
    iconPosition: {
      type: String,
      default: radios('iconPosition', iconPosition, iconPosition[1]),
    },
  },
  template: `
    <FlexLayout>
      <FlexItem
        v-for="(color, i) in colors"
        :key="i"
      >
        <LinkButtonWithIcon
          url="https://ja.nuxtjs.org/"
          :iconPosition="iconPosition"
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
