// like data
export const state = () => ({
  generatedList: [
    'いい',
    'いろ',
    'いは',
    'ろい',
    'ろろ',
    'ろは',
    'はい',
    'はろ',
    'はは',
  ],
})

// like computed
export const getters = {
  generatedListLength(state) {
    return state.generatedList.length
  },
}

// like setters
export const mutations = {
  setList(state, arr) {
    state.generatedList = arr
  },
}

// like methods
export const actions = {
  updateList({ commit }, list) {
    commit('setList', list)
  },
}
