import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/css/global.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'
// import './utils/rem.js'

// 导入全局样式表
import './assets/css/global.css'
Vue.use(ElementUI); 
Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$axios=axios
//配置请求的根路径
axios.defaults.baseURL='http://112.27.250.90:11111'

Vue.prototype.$http=axios
new Vue({
  router,
  render: h => h(App),
  beforeCreate(){
		Vue.prototype.$bus=this//安装全局事件总线 $bus就是当前应用的vm
  }
}).$mount('#app')
