import { mapState, mapGetters } from 'vuex'

export default {
  name: 'BindNameList',
  computed: {
    ...mapState('name-list', ['generatedList']),
    ...mapGetters('name-list', ['nameLength']),
    className() {
      return this.$style[`generatedList0${this.nameLength}`]
    },
  },
}
