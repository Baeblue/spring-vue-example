import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;  // false로 설정하면 배포에 대한 팁을 출력하지 않음.

new Vue({
  router,  // inject the router to make whole app router-aware
  //el: '#app',
  render: h => h(App)
}).$mount("#app");  // $mount는 el 속성과 같이 인스턴스를 화면에 붙여주는 역할 수행.
