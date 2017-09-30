import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'

Object.defineProperty(Vue.prototype, '$htttp', { value: axios })

new Vue({
  el:'#fileApp',
    render: h => h(App)
})

