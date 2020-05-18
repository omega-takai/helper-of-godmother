import { mapActions } from 'vuex'

export default {
  name: 'BindGenerateButton',
  methods: {
    ...mapActions('settings', ['generateNameList']),
  },
}
