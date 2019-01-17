<template>
  <div>
    <h1>Portfolio</h1>

    <div class="row">
      <stock-card></stock-card>
    </div>

  </div>
</template>

<script>
import StockCard from './StockCard.vue'

export default {
  components: {
    StockCard
  }
}
</script>
