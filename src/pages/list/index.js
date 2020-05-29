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
  data() {
    return {
      baseTitle: '作られた名前リスト',
    }
  },
  computed: {
    ...mapGetters('name-list', ['generatedListLength']),
    pageTitle() {
      return `${this.baseTitle}(${this.generatedListLength})`
    },
  },
  head() {
    return {
      title: this.baseTitle,
    }
  },
}
