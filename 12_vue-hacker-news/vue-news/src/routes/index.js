import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
// import createListView from '../views/CreateListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/news',
        },
        {
            path:'/news',
            name: 'news',
            component: NewsView
            // component: createListView('NewsView')
            // beforeEnter(to, from, next) {
            //     console.log('to', to);
            //     console.log('from', from);
            //     console.log('next', next);
                
            // }
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView
            // component: createListView('AskView')
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView
            // component: createListView('JobsView')
        },
        {
            path: '/user/:id', 
            name: 'user',
            // 링크에서 생성한 /user/뒤의 문자열이 들어오면 $route.params객체에
            // id라는 항목을 만들어 그 문자열을 담아준다. 이때 표시는 : 이다.
            // 그리고 $route.params.id의 값을 여러가지로 활용할 수 있게 된다.
            component: UserView,
        },
        {
            path: '/item/:id',
            name: 'item',
            component: ItemView,
        }
    ]
});


