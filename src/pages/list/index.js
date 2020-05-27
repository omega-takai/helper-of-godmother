import { mapGetters } from 'vuex'
import BaseTypography from '~/components/Atom/BaseTypography/index.vue'
import BindNameList from '@/components/Organism/BindNameList/index.vue'
import NuxtLinkTextWithIcon from '@/components/Molecule/NuxtLinkTextWithIcon/index.vue'

export default {
  name: 'list',
  components: {
    BaseTypography,
    BindNameList,
    NuxtLinkTextWithIcon,
  },
  computed: {
    ...mapGetters('name-list', ['generatedListLength']),
    pageTitle() {
      return `作られた名前リスト(${this.generatedListLength})`
    },
  },
}
