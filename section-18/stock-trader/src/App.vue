<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <app-header></app-header>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-sm-12">
        <router-view></router-view>
      </div>
    </div>

    <div v-if="error" class="alert alert-secondary mt-5" role="alert">
      {{ error }}
    </div>

    <div class="row">
      <div class="col-sm-12">
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from './components/structure/Header.vue'
import Footer from './components/structure/Footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  computed: {
    ...mapState(['error'])
  }
}
</script>
