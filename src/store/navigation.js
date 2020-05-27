// like data
export const state = () => ({})

// like computed
export const getters = {}

// like setters
export const mutations = {}

// like methods
export const actions = {
  goToHome() {
    this.$router.push('/')
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  },
  goToList() {
    this.$router.push('/list')
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  },
  generateNames({ dispatch }) {
    dispatch('modal/showModal', null, { root: true })
  },
  restoreAll() {
    window.location.assign('/')
  },
  showSettings() {
    alert('現在設定できるものがありません')
  },
}
