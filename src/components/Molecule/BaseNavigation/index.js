import BaseFeatherIcon from '~/components/Atom/BaseFeatherIcon/index.vue'

export default {
  name: 'BaseNavigation',
  components: {
    BaseFeatherIcon,
  },
  methods: {
    onClickHome() {
      this.$emit('on-click-home')
    },
    onClickList() {
      this.$emit('on-click-list')
    },
    onClickEdit() {
      this.$emit('on-click-edit')
    },
    onClickReset() {
      this.$emit('on-click-reset')
    },
    onClickSettings() {
      this.$emit('on-click-settings')
    },
  },
}
