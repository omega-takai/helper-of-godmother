import NuxtLinkTextWithIcon from '@/components/Molecule/NuxtLinkTextWithIcon/index.vue'
import LinkButtonWithIcon from '@/components/Molecule/LinkButtonWithIcon/index.vue'
import BaseTypography from '~/components/Atom/BaseTypography/index.vue'

export default {
  name: 'detail',
  components: {
    BaseTypography,
    NuxtLinkTextWithIcon,
    LinkButtonWithIcon,
  },
  data() {
    return {
      theName: '',
      theUrl: '',
      kanjiLink: 'https://b-name.jp/赤ちゃん名前辞典/?mode=1&sex=all&t=s&q=',
      nameList: [],
      alphabetList: [],
      siteName: '命名の助（メイメイノスケ）',
      pageTitle: '',
    }
  },
  head() {
    return {
      title: this.theName,
      meta: [
        {
          hid: 'twitterTitle',
          property: 'twitter:title',
          content: this.pageTitle,
        },
        { hid: 'ogTitle', property: 'og:title', content: this.pageTitle },
        { hid: 'title', name: 'title', content: this.pageTitle },
      ],
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      const paramName = this.$route.params.name
      this.theName = paramName
      this.pageTitle = `${paramName} - ${this.siteName}`
      if (process.client) {
        this.theUrl = decodeURI(location.href)
      }
    },
    listFiler(arr) {
      return arr.filter((val, i, arr) => arr.indexOf(val) === i)
    },
  },
  watch: {
    theName(newValue) {
      const list = []

      if (newValue.length <= 0) {
        this.nameList = list
      } else {
        this.alphabetList = this.listFiler([...this.theName])

        for (let i = 0; i < newValue.length; i++) {
          for (let ind = newValue.length; ind > i + 1; ind--) {
            list.push(newValue.substring(i, ind))
          }
        }

        const joinedList = this.listFiler([...list, ...this.alphabetList])
        const result = joinedList.sort((a, b) => {
          // 文字列の長さでソートする
          return b.length - a.length
        })
        this.nameList = result
      }
    },
  },
}
