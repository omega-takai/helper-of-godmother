import { mapGetters, mapActions } from 'vuex'
import AlphabetButton from '@/components/Molecule/AlphabetButton/index.vue'

export default {
  name: 'BindAlphabetButtons',
  components: {
    AlphabetButton,
  },
  computed: {
    ...mapGetters('settings', ['alphabetListFirst', 'alphabetListLast']),
  },
  methods: {
    ...mapActions('settings', ['toggleChar']),
  },
}
