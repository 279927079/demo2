// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAMap from 'vue-amap';
import VueResource from 'vue-resource'
import axios from 'axios'
//重置样式
import '../static/style/css/common.css'
Vue.config.productionTip = false
Vue.use(VueAMap);
Vue.use(VueResource);
Vue.prototype.$ajax = axios
axios.defaults.baseURL = '/api'
VueAMap.initAMapApiLoader({
  key: 'your amap key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
