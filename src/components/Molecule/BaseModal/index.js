export default {
  name: 'BaseModal',
  props: {
    title: {
      type: String,
      default: 'Modal',
    },
  },
  methods: {
    closeModal() {
      this.$emit('onClickClose')
    },
  },
}
