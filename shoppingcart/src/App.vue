<template>
  <div id="app">
    <ul class="tab clearfix">
      <router-link to="/" tag="li">Go to Foo</router-link>
      <router-link to="/cart" tag="li">Go to Bar</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style scoped>
.tab{
  padding: 0;
}
.tab li{
  float: left;
  font-size: 16px;
  line-height: 2;
  width: 150px;
  margin-right: 20px;
  background-color: #3056bb;
  list-style: none;
  color: #fff;
  text-align: center;
}
.tab li:hover{
  cursor: pointer;
  opacity: 0.7;
}
</style>
<style>
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0
}
.clearfix {
  zoom: 1
}
*:focus, input {
  outline: none;
}
</style>
