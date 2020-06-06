<template>
<div>
<h4 class="text-center">right 组件</h4>
<p>计数器：{{count}}</p>
<button @click="minusNum" class="btn btn-success">减少数量</button>
<p>修改金额：<input class="form-control" type="text" @input="modifyYuan($event.target.value)"></p>
<p>异步数据：{{txt}}</p>
</div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex';
  export default {
    data(){
      return {
        abc: ''
      }
    },
    computed: {
      count(){
        return this.$store.state.count;
      },
      ...mapState(['txt'])
    },
    methods: {
      minusNum(){
        // 直接出发 commit 函数出发 mutations 对象的方法
        this.$store.commit('minus', 666);
      }, // 解构 mutations 方法
      ...mapMutations(['modifyYuan', 'getData'])
    }
  }
</script>