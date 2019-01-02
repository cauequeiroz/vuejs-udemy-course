<template>
  <div>
    <counter v-for="item in 10" :key="item"></counter>
  </div>
</template>

<script>
import Counter from './Counter.vue';

export default {
  components: {
    'counter': Counter
  }
}
</script>
