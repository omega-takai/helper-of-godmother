import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'BindAlphabetButtons',
  computed: {
    ...mapGetters('settings', ['alphabetListFirst', 'alphabetListLast']),
  },
  methods: {
    ...mapActions('settings', ['toggleChar']),
  },
}
