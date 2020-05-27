import BaseFeatherIcon from '~/components/Atom/BaseFeatherIcon/index.vue'

export default {
  name: 'BaseNavigation',
  components: {
    BaseFeatherIcon,
  },
  methods: {
    onClickEdit() {
      this.$emit('onClickEdit')
    },
  },
}
