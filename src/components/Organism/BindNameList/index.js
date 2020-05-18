import { mapState } from 'vuex'

export default {
  name: 'BindNameList',
  computed: {
    ...mapState('name-list', ['generatedList']),
  },
}
