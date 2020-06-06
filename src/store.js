import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	count: 1,
  	yuan: 1358,
  	txt: '异步数据'
  },
  getters: {
  	getyuan(state){
  		return state.yuan.toString().replace(/(?=(\B)(\d{3})+$)/g, ",") + " 元"
  	}
  },
  mutations: {
    // mutations 常用于修改同步数据
  	increment(state){
  		state.count++;
  	},
  	minus(state){
  		state.count--;
  	},
  	modifyYuan(state, num){
  		state.yuan = num;
  	},
  	getData(state, data){
  		state.txt = data;
  	}
  },
  actions: {
    // actions 常用于异步修改数据
  	asyncFn({commit}){
  		setTimeout(()=>{
  			commit('getData', '异步数据修改完毕');
  		},1000);
  	},
  	asyncA({commit}){
  		setTimeout(()=>{
  			commit('getData', '第二种方法修触发acrion')
  		},200)
  	}

  }
})
