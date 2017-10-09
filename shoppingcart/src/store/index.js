/**
 * Created by zhouyan19724 on 2017/7/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    'productList': [
      {id: 1, name: 'iPad 4 Mini', price: '500.01', "inventory": 2},
      {id: 2, name: 'H&M T-Shirt White', price: '10.99', "inventory": 10},
      {id: 3, name: 'Charli XCX - Sucker CD', price: '19.99', "inventory": 10}],
    'cartList': []
  },
  getters,
  mutations,
  actions
})
export default store