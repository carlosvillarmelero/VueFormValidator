<template>
  <div id="app">
    <AddToMongo/>
  </div>
</template>

<script>
import AddToMongo from './components/AddToMongo.vue'

export default {
  name: 'App',
  components: {
    AddToMongo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
