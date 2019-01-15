<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 offset-sm-3">
        <h1>Routing App</h1>
        <app-nav></app-nav>
        <hr>
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './components/core/Nav.vue';

export default {
  components: {
    appNav: Nav,
  }
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
