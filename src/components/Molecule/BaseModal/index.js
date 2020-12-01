import BaseFeatherIcon from '@/components/Atom/BaseFeatherIcon/index.vue'

export default {
  name: 'BaseModal',
  components: {
    BaseFeatherIcon,
  },
  props: {
    title: {
      type: String,
      default: 'Modal',
    },
  },
  methods: {
    closeModal() {
      this.$emit('on-click-close')
    },
  },
}
