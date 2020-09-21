export default {
  name: 'BaseLinkButton',
  props: {
    colorType: {
      type: String,
      default: 'green',
    },
    text: {
      type: String,
      require: true,
      default: 'Text',
    },
    url: {
      type: String,
      default: '###',
    },
  },
  computed: {
    className() {
      const rawName = this.colorType
      const lowercase = rawName.toLowerCase()
      const upperCamelCase =
        lowercase.charAt(0).toUpperCase() + lowercase.slice(1)
      return `button${upperCamelCase}`
    },
  },
}
