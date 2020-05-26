// like data
export const state = () => ({
  generatedList: ['サンプル', 'たろう', 'はなこ'],
})

// like computed
export const getters = {
  generatedListLength(state) {
    return state.generatedList.length
  },
  nameLength(state) {
    return state.generatedList[0].length
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
