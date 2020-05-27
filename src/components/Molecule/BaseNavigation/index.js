import BaseFeatherIcon from '~/components/Atom/BaseFeatherIcon/index.vue'

export default {
  name: 'BaseNavigation',
  components: {
    BaseFeatherIcon,
  },
  methods: {
    onClickHome() {
      this.$emit('onClickHome')
    },
    onClickList() {
      this.$emit('onClickList')
    },
    onClickEdit() {
      this.$emit('onClickEdit')
    },
    onClickReset() {
      this.$emit('onClickReset')
    },
    onClickSettings() {
      this.$emit('onClickSettings')
    },
  },
}
