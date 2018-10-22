// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/font-icon/iconfont.css'
Vue.config.productionTip = false
Vue.use(ElementUI);
import i18n from './common/lang/i18n'
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
