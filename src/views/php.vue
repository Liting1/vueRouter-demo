<template>
<div class="four">
  <h3 class="text-center">命名视图</h3>
  <p></p>
  <div style="overflow: hidden;">
    <div class="four-left">
      <router-view name="left"></router-view>
    </div>
    <div class="four-right">
      <router-view name="right"></router-view>
    </div>
  </div>
  <button class="btn btn-success" @click="fnRouter('/php/demo')">跳转渲染视图</button>
</div>
</template>

<script>
  export default {
    methods: {
      fnRouter(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .four
    .four-left
      width: 260px
      height: 300px
      border 1px solid #000
      float: left
    .four-right
      width: 260px
      height: 300px
      float: right
      border: solid red 1px
</style>