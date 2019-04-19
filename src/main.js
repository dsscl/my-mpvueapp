import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import App from './App'
import '@/assets/iconfont/iconfont.css'
import '@/assets/sass/sass_index.scss'

Vue.config.productionTip = false
Vue.use(MpvueRouterPatch)
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
}
