// like data
export const state = () => ({
  stringAll:
    'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん',
})

// like computed
export const getters = {
  arrayAll: (state) => {
    return state.stringAll.split('')
  },
  arrayHalfFirst: (_state, getters) => {
    return getters.arrayAll.slice(0, 25)
  },
  arrayHalfLast: (_state, getters) => {
    return getters.arrayAll.slice(25)
  },
}

// like setters
export const mutations = {}

// like methods
export const actions = {}
