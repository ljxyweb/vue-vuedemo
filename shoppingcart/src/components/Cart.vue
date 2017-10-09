<template>
  <div>
    <h5>Your Cart</h5>
    <p v-show="!cartList.length" class="tip">Please add some products to cart.</p>
    <ul>
      <li v-for="item in cartList">{{item.name}}-{{item.price}} x {{item.num}}</li>
    </ul>
    <p>Total: ${{totalPrice}}</p>
    <button @click="clear(cartList)" :class="[cartList.length?'activeClass':'disabledClass']">Clear</button>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    computed: {
      ...mapState(['cartList']),
      ...mapGetters(['totalPrice'])
    },
    methods: mapActions(['clear'])
  }
</script>

<style scoped>
  .tip {
    font-size: 14px;
    padding: 6px 0;
    line-height: 1.5;
  }
</style>

