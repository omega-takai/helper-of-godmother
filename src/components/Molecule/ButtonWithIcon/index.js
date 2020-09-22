import BaseFeatherIcon from '~/components/Atom/BaseFeatherIcon/index.vue'
import BaseButton from '~/components/Atom/BaseButton/index.vue'

export default {
  name: 'ButtonWithIcon',
  components: {
    BaseFeatherIcon,
    BaseButton,
  },
  props: {
    iconName: {
      type: String,
      default: 'TwitterIcon',
    },
    iconSize: {
      type: String,
      default: '1.5x',
    },
    iconPosition: {
      type: String,
      default: 'right',
    },
    colorType: {
      type: String,
      default: 'green',
    },
    text: {
      type: String,
      require: true,
      default: 'Text',
    },
  },
}
