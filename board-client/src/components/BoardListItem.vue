<template>
  <div class="board-list-item">
    <div class="banner">
      <div class="name">{{ message.name }}</div>
      <div class="time">{{ message.timestamp }}</div>
    </div>
    <div class="content">
      {{ message.content }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BoardListItem',
    props: {
      message: {
        type: Object,
        default: () => {}
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .board-list-item
    padding 10px
    border 1px solid rgb(81, 90, 110)
    border-radius 5px
    margin 10px 0
    .banner
      display flex
      justify-content space-between
      margin-bottom 5px
      .name
        font-weight bolder
        color #2d8cf0
    .content
      font-size 18px
</style>