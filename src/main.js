import Vue from 'vue'
import router from './routers'
import store from './store'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios  from "./js/axios"
Vue.config.productionTip = false
Vue.use(Element);
Vue.use(axios);

export default new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


