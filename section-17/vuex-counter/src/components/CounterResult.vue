<template>
  <div>
    <p>Counter: {{ $store.state.counter }}</p>
    <p>Countdown: {{ countdown }}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters(['countdown'])
  }
}
</script>

