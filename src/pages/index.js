import BaseLayout from '@/components/Template/BaseLayout/index.vue'
import BaseTypography from '~/components/Atom/BaseTypography/index.vue'
import BindAlphabetButtons from '@/components/Organism/BindAlphabetButtons/index.vue'
import BindLengthButtons from '@/components/Organism/BindLengthButtons/index.vue'
import BindGenerateButton from '@/components/Organism/BindGenerateButton/index.vue'

export default {
  name: 'PageIndex',
  components: {
    BaseLayout,
    BaseTypography,
    BindAlphabetButtons,
    BindLengthButtons,
    BindGenerateButton,
  },
}
