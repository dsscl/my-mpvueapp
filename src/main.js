import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import App from './App'
import WXP from '@/utils/wxp'
import store from '@/store'
import * as types from '@/store/mutation_types'
import util from '@/utils'
import '@/assets/iconfont/iconfont.css'
import '@/assets/sass/sass_index.scss'

Vue.config.productionTip = false
Vue.use(MpvueRouterPatch)
App.mpType = 'app'

wx.cloud.init({
    traceUser: true
})

Vue.prototype.WXP = WXP
// vuex数据状态管理
Vue.prototype.$store = store
// vuex mutations常量集合
Vue.prototype.$types = types
// 公共方法集合
Vue.prototype.$util = util
// 云数据库
Vue.prototype.db = wx.cloud.database({
  env: 'dev-727957'
})
const app = new Vue(App)
app.$mount()


export default {
}
