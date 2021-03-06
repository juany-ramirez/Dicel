import 'aos/dist/aos.css';
import AOS from 'aos';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({startEvent: 'load'});
  },
  router,
  render: h => h(App),
}).$mount('#app');
