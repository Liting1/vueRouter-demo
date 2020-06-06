<template>
  <div id="app">
    <ul class="app-title">
      <li v-for="item in title"><router-link tag="a" :to="item.link">{{item.contentText}}</router-link></li>
    </ul>
    <div class="app-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data(){
      return {
        title: [{
          contentText: 'HTML5',
          link: '/html5'
        }, { 
          contentText: "CSS3",
          link: '/css3'
        }, { 
          contentText: "Vue",
          link: '/vue'
        }, {
          contentText: "NodeJS",
          link: '/nodejs'
        }, {
          contentText: "PHP",
          link: '/php'
        }, {
          contentText: "JavaScript",
          link: '/javascript'
        }]
      }
    }
  }
</script>
<style lang="stylus">
  

  #app
    .app-title
      width: 600px
      height: 30px
      line-height: 30px
      border: solid 1px #ccc
      margin: auto
      box-sizing: content-box
      li
        list-style: none
        width: 100px
        text-align: center
        float: left
        box-sizing: border-box
        border-left: solid 1px #ccc
        a
          text-decoration: none
        &:first-child
          border: none
      .router-link-active
        color: red
    .app-content
      width: 600px
      height: 500px;
      border 1px solid #ccc
      margin: auto
      margin-top: -1px
      box-sizing: content-box
</style>
