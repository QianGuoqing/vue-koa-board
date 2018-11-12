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
  import BoardForm from '../components/BoardForm.vue'
  import BoardList from '../components/BoardList.vue'
  export default {
    name: 'Home',
    components: {
      BoardForm,
      BoardList
    }
  }
</script>

<style lang="stylus" scoped>
</style>