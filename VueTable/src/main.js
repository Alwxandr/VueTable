import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'

export const eventEmitter = new Vue();

Vue.use(Vuelidate)

new Vue({
  el: '#app',
  render: h => h(App)
})
