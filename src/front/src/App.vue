<template>
  <div id="app" class="container-fluid">
    <div class="site-info">
      <h2>SpringBoot Vue example</h2>
    </div>
    <nav>
      <router-link class="btn btn-primary" to="/">Customers</router-link>
      <router-link class="btn btn-primary" to="/add">Add</router-link>
      <router-link class="btn btn-primary" to="/search">Search</router-link>
    </nav>
    <br/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style lang="scss">
.site-info {
  color: #7cff41;
  margin-bottom: 20px;
}

.btn-primary {
  margin-right: 5px;
}

.container-fluid {
  text-align: center;
}
</style>
