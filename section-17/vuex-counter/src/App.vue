<template>
  <div class="container">
    <div class="row">
      <div class="mt-5 col-sm-6 offset-sm-3">
        <h1>vuex counter</h1>
        <hr>
        <counter-result></counter-result>
        <counter-control></counter-control>
      </div>
    </div>
  </div>
</template>

<script>
import CounterResult from './components/CounterResult'
import CounterControl from './components/CounterControl'

export default {
  components: {
    CounterResult,
    CounterControl
  }
}
</script>
