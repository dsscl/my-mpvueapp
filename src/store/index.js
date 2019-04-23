import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate' // 引入vuex-persistedstate，将vuex的数据持久化到本地

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  plugins: [
    createPersistedState({
      // storage: window.sessionStorage, // 将数据持久化到sessionStorage（web存储）
      storage: { // 将数据持久化到wx.storage（小程序存储）
        getItem: key => wx.getStorageSync(key),
        setItem: (key, value) => wx.setStorageSync(key, value),
        removeItem: key => wx.removeStorageSync(key)
      },
      reducer: val => { // state中需要持久化的数据
        return {
          appId: val.appId,
          openId: val.openId,
          unionId: val.unionId,
          userInfo: val.userInfo,
        }
      }
    })
  ]
})
