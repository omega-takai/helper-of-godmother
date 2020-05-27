import { mapActions, mapState } from 'vuex'
import TheBindFooter from '@/components/Organism/TheBindFooter/index.vue'
import TheBindModal from '@/components/Organism/TheBindModal/index.vue'

export default {
  name: 'BaseLayout',
  components: {
    TheBindFooter,
    TheBindModal,
  },
  computed: {
    ...mapState('modal', ['isVisibleModal']),
  },
  methods: {
    ...mapActions('modal', ['showModal']),
  },
}
