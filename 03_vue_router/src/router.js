import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
const About = () => {
  return import('./views/About.vue')
}

const Users = () => {
  return import('./views/Users.vue')
}

const UsersDetail = () => {
  return import('./views/UsersDetail.vue')
}

const UsersEdit = () => {
  return import('./views/UsersEdit.vue')
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [ 
    // 라우터는 주소입력 값에 해당하는 화면을 설정하여 입력값에 따라 화면을 보여주는 장치이다.
    {
      path: '/', // 이 패쓰를 입력하면, 아래의 컴포넌트를 렌더링해라.
      name: 'home',
      component: Home 
      // 이렇게 하면 주소를 입력하지 않은 상태 즉 해당 컴포넌트를 선언된 시점에 
      // 무조건 불러오기 때문에 컴포넌트가 많은 경우에는 느려지게 된다. 
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
      // 이렇게 위에 함수로 선언하고 컴포넌트에 그 이름 선언하면, 주소값을 입력할 때 이 선언을 실행 되고 그때 불러오기 때문에 느려지지 않는다.
    },
    {
      path: '/users', // ':'의 뒤의 'userId'라는 이름을 페이지 내에서 사용
      name: 'users',
      component: Users,
      children: [
        {
          path: ':id', // /users뒤에 :id 는 일종의 변수 처리 이 변수에 해당하는 컴포넌트를 호출
          name: 'users-detail',
          component: UsersDetail
        },
        {
          path: ':id/edit', // /users뒤에 :id 는 일종의 변수 처리 이 변수에 해당하는 컴포넌트를 호출
          name: 'users-edit',
          component: UsersEdit
        }
      ]
    },
    {
      path: '/redirect-me',
      redirect: { name: 'users' }
    },
    {
      path: '/*',
      redirect: { name: 'home' }
    }
  ]
})
