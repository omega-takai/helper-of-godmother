import { mapState, mapActions } from 'vuex'

export default {
  name: 'BindLengthButtons',
  data() {
    return {
      nameLength: [...Array(6).keys()].map((i) => i + 2),
    }
  },
  computed: {
    ...mapState('settings', ['generateNameLength']),
  },
  methods: {
    ...mapActions('settings', ['changeLength']),
  },
}
