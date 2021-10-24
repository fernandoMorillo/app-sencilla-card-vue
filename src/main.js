import Vue from 'vue'
import App from './App.vue'
import BtnState from '../src/components/BtnState.vue'

export const eventBus = new Vue()

Vue.component('BtnState', BtnState)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
