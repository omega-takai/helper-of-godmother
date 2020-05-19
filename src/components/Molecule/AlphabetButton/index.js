import BaseFeatherIcon from '~/components/Atom/BaseFeatherIcon/index.vue'

export default {
  name: 'AlphabetButton',
  components: {
    BaseFeatherIcon,
  },
  props: {
    enabled: {
      type: Boolean,
      require: true,
      default: false,
    },
    text: {
      type: String,
      require: true,
      default: 'あ',
    },
  },
  computed: {
    classNameObject() {
      return {
        [this.$style.button]: true,
        [this.$style.isActive]: this.enabled,
      }
    },
  },
}
