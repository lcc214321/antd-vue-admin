import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入所有样式
import Antd from 'ant-design-vue' // 引入antd
import './styles/antd-variables.less'
import './styles/antd-vue.less'
import i18n from './components/lang'// i18n

// icon
import '@/icons'

Vue.use(Antd)

Vue.config.productionTip = false
// permission
import '@/permission' // permission control

Vue.prototype.$bus = new Vue() // event Bus 用于无关系组件间的通信。

// mock
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
