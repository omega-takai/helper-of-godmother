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
      kanjiLink: 'https://b-name.jp/赤ちゃん名前辞典/?mode=1&sex=all&t=s&q=',
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.theName = this.$route.query.name
    },
    listFiler(arr) {
      return arr.filter((val, i, arr) => arr.indexOf(val) === i)
    },
  },
  computed: {
    alphabetList() {
      const rawList = [...this.theName]
      return this.listFiler(rawList)
    },
    nameList() {
      const rawData = this.theName
      const list = []

      for (let i = 0; i < rawData.length; i++) {
        for (let ind = rawData.length; ind > i + 1; ind--) {
          list.push(rawData.substring(i, ind))
        }
      }

      const joinedList = this.listFiler([...list, ...this.alphabetList])
      const result = joinedList.sort((a, b) => {
        // 文字列の長さでソートする
        return b.length - a.length
      })
      return result
    },
  },
}
