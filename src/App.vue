<template>
  <div id="app">
    <div class="links">
      <router-link to='/'>Homepage</router-link>
      <router-link to='/comments'>Comments</router-link>
      <router-link to='/registration'>Registration</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.links a {
  padding: 10px;
  background: #DDD;
}
</style>