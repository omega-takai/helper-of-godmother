import NuxtLinkTextWithIcon from '@/components/Molecule/NuxtLinkTextWithIcon/index.vue'
import LinkButtonWithIcon from '@/components/Molecule/LinkButtonWithIcon/index.vue'
import BaseTypography from '~/components/Atom/BaseTypography/index.vue'

export default {
  name: 'about',
  components: {
    BaseTypography,
    NuxtLinkTextWithIcon,
    LinkButtonWithIcon,
  },
  head() {
    return {
      title: 'このサイトについて',
    }
  },
}
