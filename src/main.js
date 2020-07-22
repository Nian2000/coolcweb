import Vue from 'vue'
import router from './router'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import antdesgin from 'ant-design-vue'

// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios,axios)
Vue.use(antdesgin)

//Vue.component(Button.name, Button);

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
