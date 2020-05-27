// like data
export const state = () => ({
  isVisibleModal: false,
})

// like computed
export const getters = {}

// like setters
export const mutations = {
  setAbleToSeeModal(state, isVisible) {
    state.isVisibleModal = isVisible
  },
}

// like methods
export const actions = {
  showModal({ commit }) {
    commit('setAbleToSeeModal', true)
  },
  closeModal({ commit }) {
    commit('setAbleToSeeModal', false)
  },
}
