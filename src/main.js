import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/icons'
// import './permission'

// 设置为 false 以阻止 vue 在启动时生成生产提示。w
Vue.config.productionTip = false

import { Lazyload, Icon, Cell, CellGroup, loading, Button, Toast, Row, Col, Dialog, Popup, Empty,Image as VanImage } from 'vant'
Vue.use(Icon)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(loading)
Vue.use(Button)
Vue.use(Toast)
Vue.use(Row)
Vue.use(Col)
Vue.use(Dialog)
Vue.use(Empty)
Vue.use(VanImage)
Vue.use(Lazyload, {
  preLoad: 1.3,
  // error: require('@/assets/images/goods_default.png'),
  // loading: require('@/assets/images/goods_default.png'),
  attempt: 1,
  listenEvents: ['scroll'],
  lazyComponent: true
})
Vue.prototype.$toast = Toast
Vue.prototype.$dialog = Dialog

import './index.scss'
// import './views/Health/style/index.scss'

import './utils/rem'

// 统计代码
router.beforeEach((to, from, next) => {
  window._hmt.push(['_trackPageview', to.fullPath])
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
