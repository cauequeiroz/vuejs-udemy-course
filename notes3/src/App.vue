<template>
  <h1>My Routes application</h1>

  <menu>
    <router-link to="/form">Form Screen</router-link>
    <router-link to="/detail">Detail Screen</router-link>
  </menu>

  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
menu {
  margin: 20px 0;
  padding: 0;
}
menu a {
  padding: 10px;
  display: inline-block;
  background: #ccc;
  margin-right: 10px;
  color: black;
  text-decoration: none;
}

menu a.router-link-active {
  background: black;
  color: white;
}
</style>
