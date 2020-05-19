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
  data() {
    return {
      theName: '',
      kanjiLink: 'https://jigen.net/data/人名用漢字?ou=100&to=',
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.theName = this.$route.query.name
    },
  },
  computed: {
    alphabetList() {
      const rawList = [...this.theName]
      const filtered = rawList.filter((val, index, arr) => {
        return arr.indexOf(val) === index
      })
      return filtered
    },
    nameList() {
      const rawData = this.theName
      return [rawData, ...this.alphabetList]
    },
  },
}
