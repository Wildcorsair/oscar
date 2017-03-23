<template>
  <div id="app">
    <!-- <welcome msg="Hello from poperty"></welcome> -->
    <user></user>
  </div>
</template>

<script>
import Welcome from './components/Welcome'
import User from './components/User'

export default {
  name: 'app',
  components: {
    Welcome, User
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
  margin-top: 60px;
}
</style>
