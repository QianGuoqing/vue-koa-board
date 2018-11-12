<template>
  <div class="error-page">
    <div class="not-found">Page Not Found</div>
    <div class="go-back" @click="toHome">
      <Icon type="md-arrow-round-back" /> Go back
    </div>
  </div>
</template>

<script>
  export default {
    name: "ErrorPage",
    methods: {
      toHome() {
        this.$router.push('/')
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .error-page
    padding-top 30px
    text-align center
    .not-found
      font-size 24px
      font-weight bolder
    .go-back
      color #2d8cf0
      font-weight bolder
      margin-top 20px
      cursor pointer
</style>