import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

export const eventBus = new Vue({
  methods : {
    listEdit: function(memo, index) {
      this.$emit('edited', memo, index);
      // 이 버스에 있는 listEdit함수를 사용하는 쪽에서 
      // 에밋을 통해서 보냈다는 것을 받는쪽에 알린다.
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
