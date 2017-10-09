/**
 * Created by zhouyan19724 on 2017/7/17.
 */
const ADD_TO_CART = 'ADD_TO_CART'
const CLEAR = 'CLEAR'
export default {
  [ADD_TO_CART](state, v){
    let list = state.cartList
    let record = list.find(ele => {
      return ele.id === v.id
    })
    if (!record) {
      list.push({id:v.id,name:v.name,price:v.price,num:1})
    } else {
      record.num++
    }
    v.inventory--
  },
  [CLEAR](state,savedCartItems ){
    let pl=state.productList
    let cl=state.cartList
    pl.forEach(function(el) {
      var index=cl.findIndex(function(cuEl){
          return el.id===cuEl.id
      })
      if(index!==-1)
      el.inventory=el.inventory+cl[index].num
    }, this);
    state.cartList = []
  }
}