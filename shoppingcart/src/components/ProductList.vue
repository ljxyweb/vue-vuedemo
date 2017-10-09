<template>
  <div>
    <h5>Products</h5>
    <ul>
      <li v-for="item in productList">
        <p>{{item.name}}-${{item.price}}</p>
        <p>剩余{{item.inventory}}件</p>
        <button @click="addToCart(item)" :class="[item.inventory>0?'activeClass':'disabledClass']">Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    computed: mapState(['productList']),
    methods: mapActions(['addToCart'])
  }
</script>

<style scoped>
button{
  background-color: #eee;
  color: #000;
  border:1px solid #000;
}
.activeClass:hover{
  cursor: pointer;
}
.activeClass:active{
  border-color: blue;
}
.disabledClass{
  opacity: 0.5;
}
.disabledClass:hover{
  cursor: default;
}
</style>


