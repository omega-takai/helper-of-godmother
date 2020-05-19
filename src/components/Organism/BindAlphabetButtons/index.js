import { mapGetters } from 'vuex'

export default {
  name: 'BindAlphabetButtons',
  computed: {
    ...mapGetters('settings', ['alphabetListFirst', 'alphabetListLast']),
  },
}
