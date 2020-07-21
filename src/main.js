import Vue from 'vue'
import router from './router'
//import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import antdesgin from 'ant-design-vue'
Vue.use(antdesgin)

//Vue.component(Button.name, Button);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
