import Vue from 'vue';
import App from './App.vue';
import { router } from './routes/index.js';
import { store } from './store/index.js';

Vue.config.productionTip = false;

new Vue({
  // render(h) {
  //   return h(App);
  // },
  components: { App },
	template: `<div> 
		<app></app>
	</div>`,
  router,
  store
}).$mount('#app')
