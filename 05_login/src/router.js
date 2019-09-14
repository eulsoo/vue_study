import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

Vue.use(Router);

const rejectAuthUser = function(to, from, next) {
  if (store.state.isLogin === true) {
    alert('로그인 되어 있습니다.');
    next('/');
  } else {
    next();
  }
}

const onlyAuthUser = function(to, from, next) {
  if (store.state.isLogin === false) {
    alert('로그인이 필요한 기능입니다.');
    next('/');
  } else {
    next();
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter: rejectAuthUser,
      component: () => import('./views/Login.vue')
    },
    {
      path: '/mypage',
      name: 'mypage',
      beforeEnter: onlyAuthUser,
      component: () => import('./views/mypage.vue')
    }
  ]
})
