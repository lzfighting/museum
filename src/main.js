import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/style/font/font.css'
import backView from '@/components/back.vue'
Vue.config.productionTip = false
Vue.component('backView', backView);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
