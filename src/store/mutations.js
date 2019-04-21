import * as types from './mutation_types'

const mutations = {
  // [方法名](参数1,参数2...){方法}
  [types.SET_OPEN_ID] (state, v) {
    state.openId = v
  },
  [types.SET_USER_INFO] (state, v) {
    state.userInfo = v
  },
  [types.SET_CITY] (state, v) {
    state.city = v
  },
}

export default mutations