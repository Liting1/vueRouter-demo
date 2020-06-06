<template>
<div class="two">
  <h3>路由传参</h3>
  <button class="btn btn-success" @click="getData">获取动态路径参数</button>
  <button class="btn btn-success" @click="getData2">获取查询字符串参数</button>
  <p>显示动态路径参数 id：{{$route.params.id}}</p>
  <p>显示查询字符串参数 code：{{$route.query.code}}</p>
</div>
</template>

<script>
export default {
  props: ['id'], // 当路由 设置props为true时，那么可以通过属性或取该参数, 参数只能是动态路径的形式
  created(){
    console.log(this.id || "") // 通过属性的方式获取路由参数 id
  },
  methods:{
    getData(){
      console.log(this.$route.params)
    },
    getData2(){
      console.log(this.$route.query);
    }
  },
  watch:{
    // 监听路由参数变化
    '$route'(to, from){
        console.log(to, from)
    }
  },
  /*
    路由守卫
    当书写了路由守卫时路由监听不生效
  */
  beforeRouteUpdate(to, from, next){
    console.log('路由守卫');
  },
  beforeRouteLeave(to, from, next){
    // 导航离开该组件的对应路由时调用
    console.log("beforeRouteLeave");
    next();
  }
}
</script>

<style scoped lang="stylus">
  .two
    h3,p
      text-align: center
</style>