import { mapGetters } from 'vuex'
import BindNameList from '@/components/Organism/BindNameList/index.vue'
import BaseTypography from '~/components/Atom/BaseTypography/index.vue'

export default {
  name: 'PageIndex',
  components: {
    BaseTypography,
    BindNameList,
  },
  computed: {
    ...mapGetters('name-list', ['generatedListLength']),
    pageTitle() {
      return `作られた名前リスト(${this.generatedListLength})`
    },
  },
}
