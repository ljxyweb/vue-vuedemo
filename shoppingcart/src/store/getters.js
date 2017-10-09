/**
 * Created by zhouyan19724 on 2017/7/17.
 */
export default {
  totalPrice(state){
    const num = state.cartList.reduce((pre, cur) => {
      return pre + Number.parseFloat(cur.price) * Number.parseFloat(cur.num)
    }, 0)
    return num.toFixed(2)
  }

}