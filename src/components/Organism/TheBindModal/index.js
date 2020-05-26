import { mapActions, mapState } from 'vuex'
import BaseModal from '@/components/Molecule/BaseModal/index.vue'

export default {
  name: 'TheBindModal',
  components: {
    BaseModal,
  },
  computed: {
    ...mapState('modal', ['isVisibleModal']),
  },
  methods: {
    ...mapActions('modal', ['closeModal']),
  },
}
