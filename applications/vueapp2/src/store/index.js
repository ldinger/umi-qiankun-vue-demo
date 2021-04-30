import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
     k12  : null,

  },
  mutations: {

     //显式的更改state里的数据
     setK12( state, val  ){
        state.k12  = val ; 
       }
  },
  actions: {},
  modules: {},
});
