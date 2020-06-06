<template>
<div>
<h3>简单路由</h3>
<button class="btn btn-success btn-block" @click="msg">查看当前路由信息</button>
<button class="btn btn-success btn-block" @click="go">返回上一个路由页面</button>
<button class="btn btn-success btn-block" @click="two">跳转到CSS3路由</button>
<button class="btn btn-danger btn-block" @click="three">跳转到路由CSS3路由页面，通过动态路由传递参数id=123</button>
<button class="btn btn-warning btn-block" @click="four">跳转到CSS3路由页面，通过查询字符串传递参数code=html6</button>
</div>		
</template>

<script>
export default {
  methods:{
    msg(){
      console.log(this.$route);
    },
    go(){
      this.$router.go(-1);
    },
    two(){
      // 编程式导航
      this.$router.push('css3')
    },
    three(){
      this.$router.push('css3/123')
    },
    four(){
      this.$router.push('css3?code=html6');
      // 等价于下面的
      // this.$router.push({path: 'css3', query:{code:"html5"}})
    }
  },
  computed: {
  
  }
}
</script>

<style scoped lang="stylus">
  h3, p
    text-align: center
</style>