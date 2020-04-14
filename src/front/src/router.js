import Vue from "vue";
import Router from "vue-router";
import CustomersList from "./components/CustomersList";
import AddCustomer from "./components/AddCustomer";
import SearchCustomers from "./components/SearchCustomers";
import Customer from "./components/Customer";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "customers",
      alias: "/customer",
      component: CustomersList,
      children: [
        {
          path: "/customer/:id",
          name: "customer-details",
          component: Customer,
          // props를 사용하면 url에 대한 의존성이 제거.
          props: true  // boolean 모드_props를 true로 설정하면 route.params가 컴포넌트 props로 설정된다.
        }
      ]
    },
    {
      path: "/add",
      name: "add",
      component: AddCustomer
    },
    {
      path: "/search",
      name: "search",
      component: SearchCustomers
    }
  ]
});
