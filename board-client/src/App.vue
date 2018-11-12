<template>
  <div id="app">
    <home-header></home-header>
    <router-view/>
  </div>
</template>

<script>
  import HomeHeader from './components/HomeHeader.vue'
  export default {
    name: 'App',
    components: {
      HomeHeader
    }
  }
</script>

<style>
</style>
