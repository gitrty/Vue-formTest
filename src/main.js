import Vue from 'vue'
import App from './App.vue'
import { router } from './router/'
import store from './store'
import "./assets/css/common.css"
import "./assets/css/main.less"
// import "./assets/js/unit"

import common from './common'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import toyo from './components'

Vue
  .use(ElementUI)
  .use(common)
  .use(toyo)


Vue.config.productionTip = false

export const vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
