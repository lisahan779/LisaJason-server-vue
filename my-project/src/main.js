import Vue from 'vue'
import App from './App.vue'
import Myhttpserver from './plugin/http'
import router from './router'
Vue.config.productionTip = false
// 以插件的形式使用案axios
Vue.use(Myhttpserver);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
