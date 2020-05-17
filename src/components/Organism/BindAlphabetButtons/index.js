import { mapGetters } from 'vuex'

export default {
  name: 'BindAlphabetButtons',
  computed: {
    ...mapGetters('alphabet', ['arrayHalfFirst', 'arrayHalfLast']),
  },
}
