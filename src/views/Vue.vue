<template>
<div class="three">
  <h3>路由嵌套</h3>
  <ul>
    <li v-for="item in vues">
      <router-link tag="a" :to="item.link">{{item.txt}}</router-link>
    </li>
  </ul>
  <div class="content">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      vues: [{
        txt: 'vue-router',
        link: '/vue/vueRouter'
      }, {
        txt: 'vuex',
        link: '/vue/vuex'
      }, {
        txt: 'axios',
        link: '/vue/axios'
      }, {
        txt: 'vue-cli',
        link: '/vue/vueCli'
      }, {
        txt: 'vue-loader',
        link: '/vue/vueLoader'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
  .three
    h3, p
      text-align: center
    ul
      margin-left: 20px
      overflow: hidden
      display: flex
      justify-content: center
      li
        list-style: none
        // float: left
        border 1px solid #000
        padding: 5px 12px
        margin-right: -1px
</style>