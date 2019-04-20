import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import App from './App'
import WXP from '@/utils/wxp'
import store from '@/store/index'
import '@/assets/iconfont/iconfont.css'
import '@/assets/sass/sass_index.scss'

Vue.config.productionTip = false
Vue.use(MpvueRouterPatch)
App.mpType = 'app'

wx.cloud.init({
    traceUser: true
})

Vue.prototype.WXP = WXP
Vue.prototype.$store = store
Vue.prototype.db = wx.cloud.database({
  env: 'dev'
})
const app = new Vue(App)
app.$mount()


export default {
}
