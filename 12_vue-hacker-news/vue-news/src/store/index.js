import Vue from 'vue';
import Vuex from 'vuex';
import { fetchListItem, fetchUserInfo, fetchAskItem } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: { // 데이터 저장하는 일
        user: [],
        item: {},
        list:[]
    },
    getters: { // 각 페이지에서 함수로 호출해 가져갈 수 있도록 진열해 둠
        // news(state) {
        //     return state.news;
        // },
        // ask(state) {
        //     return state.ask;
        // },
        // jobs(state) {
        //     return state.jobs;
        // },
        // user(state) {
        //     return state.user;
        // },
        // item(state) {
        //     return state.item;
        // }
    },
    mutations: { // state에 저장
        SET_USER(state, user) {
            state.user = user;
        },
        SET_ITEM(state, item) {
            state.item = item; 
        },
        SET_LIST(state, list) {
            state.list = list
        }
    },
    actions: { // api/index.js에 데이터 가져오는 행동대장들을 호출해서 받고, 뮤테이션에 넘김
        async FETCH_USER(context, userName) {
            try {
                const res = await fetchUserInfo(userName);
                context.commit('SET_USER', res.data);
                return res; // 리턴을 해줘야 다음일을 한다? 어떤값을 리턴하더라도 promise가 리턴된다?
            } catch (err) {
                console.log(err);
            }
        },
        async FETCH_ITEM(context, askId) {
            try {
                const res = await fetchAskItem(askId);
                context.commit('SET_ITEM', res.data);
                return res;
            } catch (err) {
                console.log(err);
            }
        },
        // promise 방식
        // FETCH_LIST(context, pageName) {
        //     return fetchListItem(pageName)
        //         .then(res => {
        //             context.commit('SET_LIST', res.data);
        //             console.log(4);
        //             return res;
        //         })
        //         .catch(err => {
        //             console.log(err);
        //         })
        // },
        async FETCH_LIST(context, pageName) {
            try {
                const res = await fetchListItem(pageName);
                context.commit('SET_LIST', res.data);
                return res;
            } catch (err) {
                console.log(err);
            }
        }
    }
})