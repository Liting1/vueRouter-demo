<template>
<div>
<h4 class="text-center">left 组件</h4>
<p>计数器：{{count}}</p>
<p>金额：{{getyuan}}</p>
<p>这是异步数据： {{txt}}</p>
<p><button class="btn btn-success" @click="addNum">增加数量</button></p>
<p><button class="btn btn-success" @click="asyncFn">获取异步数据</button></p>
<p><button class="btn btn-success" @click="asyncA">修改数据</button></p>

</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
  data(){
    return {
      a: 0
    }
  },
  computed:{
   ...mapState(['count', 'txt']),
   ...mapGetters(['getyuan'])
  },
  methods:{
    asyncA(){
      // 触发Acrion
      this.$store.dispatch('asyncA');
    },
    addNum(){
      // 修改状态
      this.$store.commit('increment');
    },
    ...mapActions(['asyncFn'])
  }
}
</script>