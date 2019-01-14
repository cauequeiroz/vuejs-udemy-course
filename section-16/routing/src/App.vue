<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 offset-sm-3">
        <h1>Routing App</h1>
        <app-nav></app-nav>
        <hr>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
  components: {
    appNav: Nav,
  }
};
</script>
