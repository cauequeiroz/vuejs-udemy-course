<template>
  <div>
    <button class="btn btn-secondary" @click="increment">increment</button>
    <button class="btn btn-secondary" @click="decrement">decrement</button>
    <button class="btn btn-secondary" @click="reset(3)">reset (3s)</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['increment', 'decrement', 'reset'])
  }
}
</script>

