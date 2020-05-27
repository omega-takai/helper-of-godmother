import { mapActions } from 'vuex'
import BaseModal from '@/components/Molecule/BaseModal/index.vue'
import BindAlphabetButtons from '@/components/Organism/BindAlphabetButtons/index.vue'
import BindLengthButtons from '@/components/Organism/BindLengthButtons/index.vue'
import BindGenerateButton from '@/components/Organism/BindGenerateButton/index.vue'

export default {
  name: 'TheBindModal',
  components: {
    BaseModal,
    BindAlphabetButtons,
    BindLengthButtons,
    BindGenerateButton,
  },
  methods: {
    ...mapActions('modal', ['closeModal']),
  },
}
