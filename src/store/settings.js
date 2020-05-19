const alphabetRaw = [
  ...'あいうえおかきくけこさしすせそたちつてとなにぬねの',
  ...'はひふへほまみむめもやゆよらりるれろわをん',
]
const defaultAlphabetObj = alphabetRaw.map((val) => {
  // デフォルトでいくつか選択させておく
  return { key: val, enabled: ['い', 'ろ', 'は'].includes(val) }
})

// like data
export const state = () => ({
  alphabetList: defaultAlphabetObj,
})

// like computed
export const getters = {
  alphabetListFirst(state) {
    return state.alphabetList.slice(0, 25)
  },
  alphabetListLast(state) {
    return state.alphabetList.slice(25)
  },
}

// like setters
export const mutations = {
  setEnableChar(state, index) {
    state.alphabetList[index].enabled = true
  },
  setDisableChar(state, index) {
    state.alphabetList[index].enabled = false
  },
}

// like methods
export const actions = {
  generateNameList() {
    this.$router.push('/list')
  },
  toggleChar({ commit, state }, key) {
    const targetIndex = state.alphabetList.findIndex((char) => {
      return char.key === key
    })
    if (state.alphabetList[targetIndex].enabled) {
      commit('setDisableChar', targetIndex)
    } else {
      commit('setEnableChar', targetIndex)
    }
  },
}
