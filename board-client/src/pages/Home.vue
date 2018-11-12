<template>
  <div class="home">
    <Row>
      <Col span="6">
        <span style="opacity: 0;">a</span>
      </Col>
      <Col span="12">
        <home-header></home-header>
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
  import HomeHeader from '../components/HomeHeader.vue'
  import BoardForm from '../components/BoardForm.vue'
  import BoardList from '../components/BoardList.vue'
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      BoardForm,
      BoardList
    }
  }
</script>

<style lang="stylus" scoped>
</style>