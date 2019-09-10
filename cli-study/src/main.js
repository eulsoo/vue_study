import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';

Vue.config.productionTip = false;
export const eventBus = new Vue({
  methods: {
    userWasEdited: function(date) {
      this.$emit('userWasEdited', date);
    }
  }
}); // 새로운 뷰 인스턴스 생성

new Vue({ // 뷰 인스턴스 생성
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
