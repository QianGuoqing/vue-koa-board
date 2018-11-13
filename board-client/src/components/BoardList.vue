<template>
  <div class="board-list">
    <div class="toolbar">
      <div class="messages">{{messagesLength}} messages</div>
      <div class="arrow-down"><Icon type="md-arrow-down"/></div>
    </div>
    <ul class="message-list">
      <li class="message-item" v-for="message in messages" :key="message._id">
        <board-list-item :message="message"></board-list-item>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import BoardListItem from './BoardListItem.vue'
  export default {
    name: 'BoardList',
    components: {
      BoardListItem
    },
    computed: {
      ...mapState(['messages']),
      messagesLength() {
        return this.messages.length 
      }
    },
    watch: {
      messages() {
        this.messages = this.$store.state.messages
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .board-list
    .toolbar
      display flex
      justify-content space-between
      align-items center
      .messages
        font-weight bolder
      .arrow-down
        cursor pointer
        color #2d8cf0
</style>