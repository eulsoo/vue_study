import Vue from 'vue'
import Vuex from 'vuex'
import router from './router';
import axios from 'axios';

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
    login({ dispatch }, loginObj) {
      // 토큰을 받아오는 통신
      axios
        .post('https://reqres.in/api/login', loginObj)
        .then(res => {
          // 성공시 token을 받아옴
          let token = res.data.token;

          // 반환된 토큰을 로컬스토리지에 'access_token' 라는 이름으로 저장함
          localStorage.setItem('access_token', token);
          dispatch('getMemberInfo');
        })
        .catch(err => {
          alert('이메일과 비밀번호를 확인하세요')
      });
    }, //login end
    logout({ commit }) {
      commit('logout');
      router.push({name: 'home'});
    }, //logout end
    getMemberInfo({commit}) {
      // 로컬 스토리지에 저장된 토큰을 불러옴
      let token = localStorage.getItem('access_token');
      let config = { // header정보에 config객체를 이용해 정보를 주도록 약속되어 있음.
        headers: {
          'access-token': token
        }
      };
      // 받아온 토큰을 가지고 user정보를 받아오는 통신
      // 새로 고침을 했을 경우 가지고 있는 토큰으로 멤버정보를 재요청 (그러므로다시 아이디 패스를 넣지 않아도됨)
      axios
        .get('https://reqres.in/api/users/2', config)
        .then(respons => {
          // 토큰을 받은 서버가 user에 대한 정보를 respons에 돌려줌.
          let userInfo = {
            id: respons.data.data.id,
            first_name: respons.data.data.first_name,
            last_name: respons.data.data.last_name,
            avatar: respons.data.data.avatar
          }
          commit('loginSuccess', userInfo);
        })
        .catch(error => {
          alert('이메일과 비밀번호를 확인하세요')
        })
    }

  }
})
