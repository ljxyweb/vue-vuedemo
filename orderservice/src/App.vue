<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
@import '../node_modules/normalize.css/normalize.css';
@import './base/css/common.css';
[v-cloak] {
  display: none;
}
</style>
