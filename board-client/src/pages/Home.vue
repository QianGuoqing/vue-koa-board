<template>
  <div class="home">
    <Row>
      <Col span="6">
        <span style="opacity: 0;">a</span>
      </Col>
      <Col span="12">
        <board-form></board-form>
        <board-list></board-list>
      </Col>
      <Col span="6">
        <span style="opacity: 0;">a</span>
      </Col>
    </Row>
  </div>
</template>

<script>
  import { getMessagesByGet } from '../apis/request.js'
  import { REQUEST_SUCCESS, SERVER_ERROR } from '../apis/requestCode.js'
  import { mapMutations, mapState } from 'vuex'
  import BoardForm from '../components/BoardForm.vue'
  import BoardList from '../components/BoardList.vue'
  export default {
    name: 'Home',
    components: {
      BoardForm,
      BoardList
    },
    created() {
      getMessagesByGet().then(res => {
        res = res.data
        console.log(res)
        switch (res.code) {
          case REQUEST_SUCCESS:
            this.setMessages(res.messages)
            break
          case SERVER_ERROR:
            this.$Message.error(res.message)
            break
          default:
            break
        }
      }).then(err => {
        this.$Message.error('Internal Error1')
      })
    },
    computed: {
      ...mapState([
        'messages'
      ])
    },
    methods: {
      ...mapMutations([
        'setMessages'
      ])
    },
  }
</script>

<style lang="stylus" scoped>
</style>