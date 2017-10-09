/**
 * Created by zhouyan19724 on 2017/7/17.
 */
export default {
  addToCart({commit}, v){
    if (v.inventory > 0) {
      commit('ADD_TO_CART', v)
    }
  },
  clear({commit},savedCartItems ){
    commit('CLEAR',savedCartItems )
  }
}