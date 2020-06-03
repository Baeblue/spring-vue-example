import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;  // false로 설정하면 배포에 대한 팁을 출력하지 않음.

new Vue({
  router,  // inject the router to make whole app router-aware
  render: h => h(App)
}).$mount("#app");
