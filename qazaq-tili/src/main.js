import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import 'material-design-icons-iconfont';
import {func} from './functions.js'
import {i18n} from 'vue-lang-router'

Vue.prototype.$func = func

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
