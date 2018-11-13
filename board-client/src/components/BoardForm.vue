<template>
  <div class="board-form">
    <div class="form-group">
      <div class="label">Name</div>
      <Input 
        placeholder="Enter something..." 
        size="large" 
        v-model="name"></Input>
    </div>
    <div class="form-group">
      <div class="label">Message</div>
      <Input 
        type="textarea" 
        :autosize="{ minRows: 5, maxRows: 5 }" 
        placeholder="Enter something..."
        v-model="content"></Input>
    </div>
    <div class="form-group">
      <Button 
        type="primary" 
        long size="large"
        @click="sendMessage">提交</Button>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { sendMessageByPost, getMessagesByGet } from '../apis/request.js'
  import { SEND_MESSAGE_URL } from '../apis/urls.js'
  import { REQUEST_SUCCESS, REQUEST_FAIL_WITH_EMPTY, REQUEST_FAIL_WITH_DUPLUCATE } from '../apis/requestCode.js'
  export default {
    name: "BoardForm",
    data() {
      return {
        name: '',
        content: ''
      }
    },
    methods: {
      ...mapMutations([
        'setMessages'
      ]),
      async sendMessage() {
        try {
          let result = await sendMessageByPost(SEND_MESSAGE_URL, {
            name: this.name,
            content: this.content
          })
          result = result.data
          console.log('send message', result)
          switch (result.code) {
            case REQUEST_SUCCESS:
              this.$Message.success('send message success');
              const messages = await getMessagesByGet()
              this.setMessages(messages)
              break
            case REQUEST_FAIL_WITH_EMPTY:
              this.$Message.error('name or message cannot be empty')
              break
            case REQUEST_FAIL_WITH_DUPLUCATE:
              this.$Message.error('duplicate name')
              break
            default:
              break
          }
          this.name = ''
          this.content = ''
        } catch (error) {
          this.$Message.error('send message error: ', error);
        }
      }
    },
  }
</script>

<style lang="stylus" scoped>
    .form-group
      margin 20px 0
      .label
        margin 10px 0
</style>