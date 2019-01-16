<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <app-header></app-header>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/include/Header.vue'

export default {
  components: {
    'app-header': Header
  }
}
</script>
