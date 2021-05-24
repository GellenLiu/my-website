<template>
  <div id="app">
    <index></index>  
  </div>
</template>

<script>
import index from './pages/index/index.vue'

export default {
  name: 'app',
  components: {
    index
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
html,body{
  height: 100%;
  width: 100%;
  margin: 0;
}
</style>
