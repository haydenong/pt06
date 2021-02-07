import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import NavBar from '@/components/NavBar'

Vue.config.productionTip = false
Vue.component('NavBar', NavBar)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
