<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <app-header></app-header>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-sm-12">
        <!-- <home></home> -->
        <stock></stock>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/include/Header.vue'
import Footer from './components/include/Footer.vue'
import Home from './components/Home.vue'
import Stock from './components/Stock.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    Home,
    Stock
  }
}
</script>
