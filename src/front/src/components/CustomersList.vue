<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Customers List</h4>
      <ul>
        <li v-for="(customer, index) in customers" :key="index">
          <router-link :to="{
            name: 'customer-details',
            params: { customer: customer, id: customer.id }
          }">
            {{customer.name}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="col-md-6">  <!-- 여기 역할이 뭘까 -->
      <router-view @refreshData="refreshList"></router-view>
    </div>
  </div>
</template>

<script>
import http from "../http-common";

export default {
  name: "customers-list", <!-- router.js에서는 name: "customers"인데 상관없나.-->
  data() {
      return {
        customers: []   // <li v-for="(customer, index) in customers" :key="index">에서!!
      };
  },
  methods: {
    /* eslint-disable no-console */  // 이게 뭐지..
    retrieveCustomers() {    // 고객 검색..? 조회?
      http
        .get("/customers")
        .then(response => {
          this.customers = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveCustomers();
    }
    /* eslint-enable no-console */
  },
  mounted() {
    this.retrieveCustomers();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 450px;
  margin: auto;
}
</style>
