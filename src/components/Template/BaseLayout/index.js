import { mapActions } from 'vuex'
import TheBindFooter from '@/components/Organism/TheBindFooter/index.vue'
import TheBindModal from '@/components/Organism/TheBindModal/index.vue'

export default {
  name: 'BaseLayout',
  components: {
    TheBindFooter,
    TheBindModal,
  },
  methods: {
    ...mapActions('modal', ['showModal']),
  },
}
