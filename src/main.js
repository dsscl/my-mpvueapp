import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import App from './App'

Vue.config.productionTip = false
Vue.use(MpvueRouterPatch)
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
}
