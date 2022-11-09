import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueFacebookPage from 'vue-facebook-page'
 

import LazyTube from "vue-lazytube";




Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(LazyTube);
Vue.use(VueFacebookPage, '1239401336829223')


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
