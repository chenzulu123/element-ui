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
// 使用element-ui
Vue.use(ElementUI);
// import VueI18n from 'vue-i18n'
import i18n from './common/lang/i18n'
// Vue.use(VueI18n) // 通过插件的形式挂载
// import cn from './common/lang/zh';
// import en from './common/lang/en';
// const i18n = new VueI18n({
//     messages: {
//       'zh-CN': cn,   // 中文语言包
//       'en-US': en    // 英文语言包
//     }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
