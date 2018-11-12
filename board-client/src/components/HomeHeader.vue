<template>
  <div class="header">
    <span class="hello">Say Hello </span>
    <span class="world">to the world</span>
  </div>
</template>

<script>
  export default {
    name: 'HomeHeader'
  }
</script>

<style lang="stylus" scoped>
  .header
    text-align center
    padding 20px 0
    border-bottom 1px solid #2d8cf0
    .hello
      font-size 56px
      font-weight bolder
      color #2d8cf0
    .world
      font-size 24px
</style>