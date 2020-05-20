const alphabetRaw = [
  ...'あいうえおかきくけこさしすせそたちつてとなにぬねの',
  ...'はひふへほまみむめもやゆよらりるれろわをん',
]
const defaultAlphabetObj = alphabetRaw.map((val) => {
  // デフォルトでいくつか選択させておく
  return { key: val, enabled: ['い', 'ろ', 'は', 'に'].includes(val) }
})
// const numArray = [...Array(6).keys()].map((i) => i + 2)
// const defaultNumObj = numArray.map((val) => {
//   return { key: val, enabled: [2].includes(val) }
// })

// like data
export const state = () => ({
  alphabetList: defaultAlphabetObj,
  generateNameLength: 3,
})

// like computed
export const getters = {
  alphabetListFirst(state) {
    return state.alphabetList.slice(0, 25)
  },
  alphabetListLast(state) {
    return state.alphabetList.slice(25)
  },
  listAlphabetEnabled(state) {
    const targetList = state.alphabetList.filter((char) => {
      return char.enabled
    })
    return targetList
  },
  countAlphabetEnabled(_state, getters) {
    return getters.listAlphabetEnabled.length
  },
  countGenerateNames(state, getters) {
    return getters.countAlphabetEnabled ** state.generateNameLength
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
  setNameLength(state, num) {
    state.generateNameLength = num
  },
}

// like methods
export const actions = {
  generateNameList({ state, getters, dispatch }) {
    const listEnabled = getters.listAlphabetEnabled.map((obj) => {
      return obj.key
    })
    const selectedStr = listEnabled.join('')
    const nameLength = state.generateNameLength
    const listGenerated = []
    console.log(nameLength, selectedStr, listGenerated, listEnabled)

    // dispatch('name-list/updateList', joinedList, { root: true })

    // this.$router.push('/list')
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
  changeLength({ commit }, key) {
    commit('setNameLength', key)
  },
}
