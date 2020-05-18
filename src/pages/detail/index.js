import BaseLayout from '@/components/Template/BaseLayout/index.vue'
import BaseTypography from '~/components/Atom/BaseTypography/index.vue'
import NuxtLinkTextWithIcon from '@/components/Molecule/NuxtLinkTextWithIcon/index.vue'

export default {
  name: 'about',
  components: {
    BaseLayout,
    BaseTypography,
    NuxtLinkTextWithIcon,
  },
  computed: {
    theName() {
      return this.$route.query.name
    },
  },
}
