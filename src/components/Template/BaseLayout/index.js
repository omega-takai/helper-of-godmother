import { mapActions, mapState } from 'vuex'
import TheBindFooter from '@/components/Organism/TheBindFooter/index.vue'
import TheBindModal from '@/components/Organism/TheBindModal/index.vue'
import BaseNavigation from '@/components/Molecule/BaseNavigation/index.vue'

export default {
  name: 'BaseLayout',
  components: {
    TheBindFooter,
    TheBindModal,
    BaseNavigation,
  },
  computed: {
    ...mapState('modal', ['isVisibleModal']),
  },
  methods: {
    ...mapActions('navigation', [
      'goToHome',
      'goToList',
      'generateNames',
      'restoreAll',
      'showSettings',
    ]),
  },
}
