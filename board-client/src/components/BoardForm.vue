<template>
  <div class="board-form">
    <div class="form-group">
      <div class="label">Name</div>
      <Input placeholder="Enter something..." size="large"></Input>
    </div>
    <div class="form-group">
      <div class="label">Message</div>
      <Input type="textarea" :autosize="{ minRows: 5, maxRows: 5 }" placeholder="Enter something..."></Input>
    </div>
    <div class="form-group">
      <Button type="primary" long size="large">提交</Button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BoardForm"
  }
</script>

<style lang="stylus" scoped>
    .form-group
      margin 20px 0
      .label
        margin 10px 0
</style>