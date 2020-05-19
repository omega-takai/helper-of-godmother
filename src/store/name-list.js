// like data
export const state = () => ({
  generatedList: [
    'てすとおお',
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
export const getters = {}

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
