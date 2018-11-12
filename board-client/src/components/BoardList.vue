<template>
  <div class="board-list">
    <div class="toolbar">
      <div class="messages">100 messages</div>
      <div class="arrow-down"><Icon type="md-arrow-down"/></div>
    </div>
    <ul class="message-list">
      <li class="message-item"></li>
    </ul>
  </div>
</template>

<script>
  import BoardListItem from './BoardListItem.vue'
  export default {
    name: 'BoardList',
    components: {
      BoardListItem
    }
  }
</script>

<style lang="stylus" scoped>
  .board-list
    .toolbar
      display flex
      justify-content space-between
      align-items center
      .arrow-down
        cursor pointer
        color #2d8cf0
</style>