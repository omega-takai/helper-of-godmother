import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import BaseButton from './index.vue'
import { FlexLayout, FlexItem } from '@/assets/styledComponent/component'

const colors = ['green', 'grey']

const stories = storiesOf('Design System|Atom/BaseButton', module)

stories.addDecorator(withKnobs)

stories.add('normal', () => ({
  components: {
    BaseButton,
    FlexLayout,
    FlexItem,
  },
  data() {
    return {
      colors,
    }
  },
  props: {
    text: {
      type: String,
      default: text('text', 'Button'),
    },
  },
  template: `
    <FlexLayout>
      <FlexItem
        v-for="(color, i) in colors"
        :key="i"
      >
        <BaseButton
          :title="color"
          :text="text"
          :colorType="color"
          @click.native.prevent="action"
        />
      </FlexItem>
    </FlexLayout>`,
  methods: {
    action: action('clicked'),
  },
}))

stories.add('Too Much Text', () => ({
  components: {
    BaseButton,
    FlexLayout,
    FlexItem,
  },
  props: {
    textWithBreak: {
      type: String,
      default: text('Sentences With Line Breaks', 'Base\nLink\nButton'),
    },
    longText: {
      type: String,
      default: text('Long Sentence', 'Base Link Button '.repeat(10)),
    },
  },
  template: `
    <FlexLayout>
      <FlexItem>
        <BaseButton
          :text="textWithBreak"
          colorType="green"
        />
      </FlexItem>
      <FlexItem>
        <BaseButton
          :text="longText"
          colorType="green"
        />
      </FlexItem>
    </FlexLayout>`,
}))
