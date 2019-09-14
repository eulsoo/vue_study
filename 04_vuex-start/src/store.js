import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers: [
      { userId: 'hoza123', password: '123', name: 'Hoza', address: 'Seoul', src: 'https://goo.gl/oqLfJR' },
      { userId: 'max123', password: '456', name: 'Max', address: 'Berlin', src: 'https://goo.gl/Ksk9B9' },
      { userId: 'lego123', password: '789', name: 'Lego', address: 'Busan', src: 'https://goo.gl/x7SpCD' }
    ]
  },
  getters: { // 컴퓨티드와 같은 역할 다만 인자로 데이터를 전달해야함.
    allUsersCount: function (state) {
      return state.allUsers.length;
    },
    countOfSeoul: function (state) {
      let count = 0;
      state.allUsers.forEach(function(item){
        if (item.address === 'Seoul') {
          count++;
        }
      });
      return count;
    },
    percentOfSeoul: function(state, getters) { 
      //state를 꼭 넣어줘야 함 getters는 두번째 인자로 받기 때문에 
      return Math.round(getters.countOfSeoul / getters.allUsersCount * 100);
    }
  },
  mutations: {
    addUsers: function(state, payload) {
      state.allUsers.push(payload);
    }
  },
  actions: { // 비동기적으로 난무하는 실행 명령을 효과적으로 순서를 정해주어서 성능을 정돈함.
    addUsers: function({ commit }, payload) {
      commit('addUsers', payload);
    }
  }
})
