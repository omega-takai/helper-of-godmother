import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'BindGenerateButton',
  computed: {
    ...mapState('settings', ['generateNameLength']),
    ...mapGetters('settings', ['countAlphabetEnabled', 'countGenerateNames']),
  },
  methods: {
    ...mapActions('settings', ['generateNameList']),
  },
}
