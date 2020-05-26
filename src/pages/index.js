import { mapGetters } from 'vuex'
import BaseLayout from '@/components/Template/BaseLayout/index.vue'
import BaseTypography from '~/components/Atom/BaseTypography/index.vue'
import BindAlphabetButtons from '@/components/Organism/BindAlphabetButtons/index.vue'
import BindLengthButtons from '@/components/Organism/BindLengthButtons/index.vue'
import BindGenerateButton from '@/components/Organism/BindGenerateButton/index.vue'
import BindNameList from '@/components/Organism/BindNameList/index.vue'

export default {
  name: 'PageIndex',
  components: {
    BaseLayout,
    BaseTypography,
    BindAlphabetButtons,
    BindLengthButtons,
    BindGenerateButton,
    BindNameList,
  },
  computed: {
    ...mapGetters('name-list', ['generatedListLength']),
    pageTitle() {
      return `作られた名前リスト(${this.generatedListLength})`
    },
  },
}
