<template>
<div class="four">
  <h3 class="text-center">编程式导航</h3>
  <ul>
    <li><button class="btn btn-default btn-block" @click="one('/vue')">点击跳转vue路由</button></li>
    <li><button class="btn btn-default btn-block" @click="one({name: 'css3', params: {id: 12, name: 'mt'}, query:{code:13131}})">点击跳转css3路由,编程式导航传参</button></li>
    <li><button class="btn btn-success btn-block" @click="two('/css3')">点击跳转css路由,并不增加路由历史</button></li>
  </ul>
</div>
</template>

<script>
export default {
  methods: {
    one(path){
      this.$router.push(path)
    },
    two(path){
      this.$router.replace(path)
    }
  }
}
</script>

<style scoped lang="stylus">
  .four
    ul
      li
        list-style: none
</style>