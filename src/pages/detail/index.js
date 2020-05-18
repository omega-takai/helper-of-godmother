import BaseLayout from '@/components/Template/BaseLayout/index.vue'
import BaseTypography from '~/components/Atom/BaseTypography/index.vue'
import NuxtLinkTextWithIcon from '@/components/Molecule/NuxtLinkTextWithIcon/index.vue'
import LinkButtonWithIcon from '@/components/Molecule/LinkButtonWithIcon/index.vue'

export default {
  name: 'about',
  components: {
    BaseLayout,
    BaseTypography,
    NuxtLinkTextWithIcon,
    LinkButtonWithIcon,
  },
  computed: {
    theName() {
      return this.$route.query.name
    },
    kanjiLink() {
      return 'https://jigen.net/data/人名用漢字?ou=100&to='
    },
  },
}
