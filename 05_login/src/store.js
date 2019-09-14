import Vue from 'vue'
import Vuex from 'vuex'
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoginInfo: null,
    allUsers: [
      { id: 1, name: 'Hoza', email: 'hoza@gmail.com', password: '123' },
      { id: 2, name: 'eulsoo', email: 'eulsoo@gmail.com', password: '123' }
    ],
    isLogin: false,
    isLoginError: false,
    altType: null,
    errMessage: null
  },
  mutations: { // 위의 state를 변화시키는 일을 함.
    loginSuccess(state, inputUser) { // 로그인 성공시
      state.isLogin = true;
      state.isLoginError = true;
      state.errMessage = '로그인 되었습니다.';
      state.altType = 'success';
      state.isLoginInfo = inputUser;
    },
    emailError(state) { // 이메일 실패시
      state.isLogin = false;
      state.isLoginError = true;
      state.errMessage = '가입되지 않은 아이디입니다.';
      state.altType = 'error';
    },
    passError(state) { // 비밀번호 실패시
      state.isLogin = false;
      state.isLoginError = true;
      state.errMessage = '비밀번호가 틀렸습니다.';
      state.altType = 'error';
    },
    logout(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.isLoginInfo = null;
    }
  },
  actions: { // 비지니스 로직
    //로그인 시도
    login({ state, commit }, loginObj) {
      // 전체 유저에서 해당 이메일로 유저를 찾아본다.

      let inputUser = null

      state.allUsers.forEach(item => {
        if (item.email === loginObj.email) {
          inputUser = item
        }
      })

      if (inputUser ===  null) {
        commit('emailError'); // 커밋을 통해서 뮤테이션을 실행 시켜줘야함.
      } else if (loginObj.password !== inputUser.password) {
        commit('passError');
      } else {  
        commit('loginSuccess', inputUser );
        router.push({name: 'mypage'})
      }
    }, //login end
    logout({ commit }) {
      commit('logout');
      router.push({name: 'home'});
    } //logout end

  }
})
