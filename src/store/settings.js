const alphabetRaw = [
  ...'あいうえおかきくけこさしすせそたちつてとなにぬねの',
  ...'はひふへほまみむめもやゆよらりるれろわをん',
]
const defaultAlphabetObj = alphabetRaw.map((val) => {
  // デフォルトでいくつか選択させておく
  return { key: val, enabled: val === 'い' || val === 'ろ' || val === 'は' }
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
export const mutations = {}

// like methods
export const actions = {
  generateNameList() {
    this.$router.push('/list')
  },
}
